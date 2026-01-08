import { google } from 'googleapis';

let sheets = null;
let spreadsheetId = null;

// Get spreadsheet ID (ensure it's initialized)
function getSpreadsheetId() {
  if (!spreadsheetId) {
    spreadsheetId = process.env.GOOGLE_SHEETS_ID;
  }
  return spreadsheetId;
}

// Initialize Google Sheets API
export async function initGoogleSheets() {
  try {
    const credentials = process.env.GOOGLE_SHEETS_CREDENTIALS;
    
    if (!credentials) {
      console.warn('⚠️  GOOGLE_SHEETS_CREDENTIALS not set. Google Sheets features will be disabled.');
      return null;
    }

    if (sheets && spreadsheetId) {
      return sheets;
    }

    // Parse credentials JSON
    let auth;
    try {
      const credentialsJson = JSON.parse(credentials);
      auth = new google.auth.GoogleAuth({
        credentials: credentialsJson,
        scopes: ['https://www.googleapis.com/auth/spreadsheets'],
      });
    } catch (error) {
      console.error('❌ Error parsing Google Sheets credentials:', error);
      return null;
    }

    const authClient = await auth.getClient();
    sheets = google.sheets({ version: 'v4', auth: authClient });
    spreadsheetId = process.env.GOOGLE_SHEETS_ID;

    if (!spreadsheetId) {
      console.warn('⚠️  GOOGLE_SHEETS_ID not set. Google Sheets features will be disabled.');
      return null;
    }

    console.log('✅ Google Sheets API initialized');
    return sheets;
  } catch (error) {
    console.error('❌ Google Sheets initialization error:', error);
    return null;
  }
}

// Get or create sheet for an event
async function getOrCreateSheet(eventId) {
  try {
    const sheetsClient = await initGoogleSheets();
    const currentSpreadsheetId = getSpreadsheetId();
    
    if (!sheetsClient || !currentSpreadsheetId) {
      return null;
    }

    const sheetName = eventId.charAt(0).toUpperCase() + eventId.slice(1);

    // Check if sheet exists
    try {
      const spreadsheet = await sheetsClient.spreadsheets.get({
        spreadsheetId: currentSpreadsheetId,
      });

      const sheetExists = spreadsheet.data.sheets.some(
        (sheet) => sheet.properties.title === sheetName
      );

      if (!sheetExists) {
        // Create new sheet
        await sheetsClient.spreadsheets.batchUpdate({
          spreadsheetId: currentSpreadsheetId,
          requestBody: {
            requests: [
              {
                addSheet: {
                  properties: {
                    title: sheetName,
                  },
                },
              },
            ],
          },
        });

        // Add headers
        await sheetsClient.spreadsheets.values.update({
          spreadsheetId: currentSpreadsheetId,
          range: `${sheetName}!A1:L1`,
          valueInputOption: 'RAW',
          requestBody: {
            values: [[
              'Order ID',
              'Event ID',
              'Event Name',
              'Name',
              'Email',
              'Phone',
              'Team Members',
              'Amount (₹)',
              'Status',
              'Payment ID',
              'Created At',
              'Updated At',
            ]],
          },
        });

        console.log(`✅ Created new sheet: ${sheetName}`);
      }

      return sheetName;
    } catch (error) {
      console.error('❌ Error checking/creating sheet:', error);
      return null;
    }
  } catch (error) {
    console.error('❌ Error in getOrCreateSheet:', error);
    return null;
  }
}

// Append registration to Google Sheet
export async function appendRegistrationToSheet(registration) {
  try {
    const sheetsClient = await initGoogleSheets();
    if (!sheetsClient || !spreadsheetId) {
      console.warn('Google Sheets not available, skipping sheet write');
      return null;
    }

    const sheetName = await getOrCreateSheet(registration.eventId);
    if (!sheetName) {
      return null;
    }

    const currentSpreadsheetId = getSpreadsheetId();

    // Format team members
    const teamMembersStr = registration.teamMembers
      ? registration.teamMembers.join(', ')
      : '';

    // Convert amount from paise to rupees
    const amountInRupees = (registration.amount / 100).toFixed(2);

    // Prepare row data
    const rowData = [
      registration.orderId,
      registration.eventId,
      registration.eventName || registration.eventId,
      registration.name,
      registration.email,
      registration.phone,
      teamMembersStr,
      amountInRupees,
      registration.status,
      registration.paymentId || '',
      registration.createdAt,
      registration.updatedAt,
    ];

    // Append row to sheet
    await sheetsClient.spreadsheets.values.append({
      spreadsheetId: currentSpreadsheetId,
      range: `${sheetName}!A:Z`,
      valueInputOption: 'RAW',
      requestBody: {
        values: [rowData],
      },
    });

    console.log(`✅ Registration appended to Google Sheet: ${registration.orderId}`);
    return true;
  } catch (error) {
    console.error('❌ Error appending to Google Sheet:', error);
    return null;
  }
}

// Update registration in Google Sheet (find by Order ID and update)
export async function updateRegistrationInSheet(eventId, orderId, updates) {
  try {
    const sheetsClient = await initGoogleSheets();
    const currentSpreadsheetId = getSpreadsheetId();
    
    if (!sheetsClient || !currentSpreadsheetId) {
      console.warn('Google Sheets not available, skipping sheet update');
      return null;
    }

    const sheetName = await getOrCreateSheet(eventId);
    if (!sheetName) {
      console.warn(`Could not get or create sheet for eventId: ${eventId}`);
      return null;
    }

    console.log(`🔍 Looking for orderId: ${orderId} in sheet: ${sheetName}`);

    // Get all rows to find the matching order ID
    const response = await sheetsClient.spreadsheets.values.get({
      spreadsheetId: currentSpreadsheetId,
      range: `${sheetName}!A:Z`,
    });

    const rows = response.data.values;
    if (!rows || rows.length < 2) {
      console.warn(`No data found in sheet ${sheetName} (only ${rows?.length || 0} rows)`);
      return null;
    }

    console.log(`📊 Found ${rows.length} rows in sheet. First row: ${rows[0]?.join(', ')}`);

    // Find the row with matching order ID (column A, index 0)
    let rowIndex = -1;
    for (let i = 1; i < rows.length; i++) {
      const rowOrderId = rows[i][0];
      if (rowOrderId === orderId) {
        rowIndex = i + 1; // +1 because sheets are 1-indexed
        console.log(`✅ Found orderId ${orderId} at row ${rowIndex}`);
        break;
      }
    }

    if (rowIndex === -1) {
      console.warn(`❌ Order ID ${orderId} not found in sheet ${sheetName}. Available order IDs: ${rows.slice(1).map(r => r[0]).join(', ')}`);
      return null;
    }

    // Update specific cells
    const updatesToApply = [];
    
    // Status is column I (index 8)
    if (updates.status !== undefined) {
      updatesToApply.push({
        range: `${sheetName}!I${rowIndex}`,
        values: [[updates.status]],
      });
      console.log(`📝 Will update Status (column I) to: ${updates.status}`);
    }

    // Payment ID is column J (index 9)
    if (updates.paymentId !== undefined) {
      updatesToApply.push({
        range: `${sheetName}!J${rowIndex}`,
        values: [[updates.paymentId || '']],
      });
      console.log(`📝 Will update Payment ID (column J) to: ${updates.paymentId || '(empty)'}`);
    }

    // Updated At is column L (index 11)
    if (updates.updatedAt !== undefined) {
      updatesToApply.push({
        range: `${sheetName}!L${rowIndex}`,
        values: [[updates.updatedAt]],
      });
      console.log(`📝 Will update Updated At (column L) to: ${updates.updatedAt}`);
    }

    if (updatesToApply.length > 0) {
      console.log(`🔄 Applying ${updatesToApply.length} updates to sheet...`);
      const currentSpreadsheetId = getSpreadsheetId();
      const result = await sheetsClient.spreadsheets.values.batchUpdate({
        spreadsheetId: currentSpreadsheetId,
        requestBody: {
          valueInputOption: 'RAW',
          data: updatesToApply,
        },
      });

      console.log(`✅ Registration updated in Google Sheet: ${orderId}`);
      return true;
    } else {
      console.warn(`⚠️  No updates to apply for orderId: ${orderId}`);
      return null;
    }
  } catch (error) {
    console.error('❌ Error updating Google Sheet:', error);
    console.error('Error details:', error.message);
    if (error.response) {
      console.error('Response error:', error.response.data);
    }
    return null;
  }
}

