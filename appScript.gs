/**
 * INCEPTA 2026 Contact Form - Google Apps Script
 * headers in Row 1: Timestamp | Name | Email | Subject | Message
 */

function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const data = JSON.parse(e.postData.contents);
    const timestamp = new Date(data.timestamp).toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata',
      year: 'numeric',
      month: 'short',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
    
    sheet.appendRow([
      timestamp,
      data.name,
      data.email,
      data.subject,
      data.message
    ]);
    
    return ContentService
      .createTextOutput(JSON.stringify({ 
        status: 'success', 
        message: 'Form submitted successfully' 
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ 
        status: 'error', 
        message: error.toString() 
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ 
      status: 'active', 
      message: 'INCEPTA 2026 Contact Form API is running!' 
    }))
    .setMimeType(ContentService.MimeType.JSON);
}