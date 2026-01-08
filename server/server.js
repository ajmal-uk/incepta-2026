import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs/promises';
import crypto from 'crypto';
import Razorpay from 'razorpay';
import nodemailer from 'nodemailer';
import { connectMongoDB, saveRegistrationToMongoDB, updateRegistrationInMongoDB } from './db/mongodb.js';
import { initGoogleSheets, appendRegistrationToSheet, updateRegistrationInSheet } from './utils/googleSheets.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true
}));
app.use(express.json());

// Ensure data directory exists
const dataDir = join(__dirname, 'data');
await fs.mkdir(dataDir, { recursive: true });

// Initialize Razorpay
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// Initialize Nodemailer
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.EMAIL_PORT || '587'),
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Helper function to read/write registrations
const getRegistrationsFile = (eventId) => join(dataDir, `registrations_${eventId}.json`);

async function getRegistrations(eventId) {
  try {
    const filePath = getRegistrationsFile(eventId);
    const data = await fs.readFile(filePath, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
}

async function saveRegistration(eventId, registration) {
  // Save to JSON file (backup)
  const registrations = await getRegistrations(eventId);
  registrations.push(registration);
  const filePath = getRegistrationsFile(eventId);
  await fs.writeFile(filePath, JSON.stringify(registrations, null, 2));

  // Save to MongoDB
  await saveRegistrationToMongoDB(registration);

  // Save to Google Sheets
  await appendRegistrationToSheet(registration);

  return registration;
}

async function getRegistrationByOrderId(eventId, orderId) {
  const registrations = await getRegistrations(eventId);
  return registrations.find(reg => reg.orderId === orderId);
}

async function updateRegistrationStatus(eventId, orderId, status, paymentId = null) {
  const registrations = await getRegistrations(eventId);
  const registration = registrations.find(reg => reg.orderId === orderId);
  if (registration) {
    registration.status = status;
    registration.paymentId = paymentId || registration.paymentId;
    registration.updatedAt = new Date().toISOString();
    
    // Update JSON file (backup)
    const filePath = getRegistrationsFile(eventId);
    await fs.writeFile(filePath, JSON.stringify(registrations, null, 2));

    // Update MongoDB
    await updateRegistrationInMongoDB(eventId, orderId, {
      status,
      paymentId: paymentId || registration.paymentId,
      updatedAt: registration.updatedAt,
    });

    // Update Google Sheets
    await updateRegistrationInSheet(eventId, orderId, {
      status,
      paymentId: paymentId || registration.paymentId,
      updatedAt: registration.updatedAt,
    });

    return registration;
  }
  return null;
}

// Event pricing configuration (in paise - 100 paise = 1 rupee)
const EVENT_PRICING = {
  hackathon: 50000, // ₹500
  ctf: 30000, // ₹300
  coderush: 20000, // ₹200
  vibecoding: 15000, // ₹150
  promptcraft: 10000, // ₹100
  workshops: 25000, // ₹250
  projectpres: 20000, // ₹200
  treasurehunt: 10000, // ₹100
  gala: 50000, // ₹500
};

// Send confirmation email
async function sendConfirmationEmail(registration) {
  const mailOptions = {
    from: `"INCEPTA 2026" <${process.env.EMAIL_USER}>`,
    to: registration.email,
    subject: `Registration Confirmed - ${registration.eventName}`,
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
          .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
          .details { background: white; padding: 20px; margin: 20px 0; border-radius: 5px; border-left: 4px solid #667eea; }
          .detail-row { margin: 10px 0; }
          .label { font-weight: bold; color: #555; }
          .footer { text-align: center; margin-top: 20px; color: #777; font-size: 12px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>🎉 Registration Confirmed!</h1>
            <p>INCEPTA 2026</p>
          </div>
          <div class="content">
            <p>Dear ${registration.name},</p>
            <p>Thank you for registering for <strong>${registration.eventName}</strong>!</p>
            
            <div class="details">
              <h3>Registration Details</h3>
              <div class="detail-row">
                <span class="label">Registration ID:</span> ${registration.orderId}
              </div>
              <div class="detail-row">
                <span class="label">Event:</span> ${registration.eventName}
              </div>
              <div class="detail-row">
                <span class="label">Name:</span> ${registration.name}
              </div>
              <div class="detail-row">
                <span class="label">Email:</span> ${registration.email}
              </div>
              <div class="detail-row">
                <span class="label">Phone:</span> ${registration.phone}
              </div>
              ${registration.teamMembers ? `
              <div class="detail-row">
                <span class="label">Team Members:</span> ${registration.teamMembers.join(', ')}
              </div>
              ` : ''}
              <div class="detail-row">
                <span class="label">Amount Paid:</span> ₹${(registration.amount / 100).toFixed(2)}
              </div>
              <div class="detail-row">
                <span class="label">Payment ID:</span> ${registration.paymentId || 'N/A'}
              </div>
            </div>
            
            <p>We're excited to have you join us at INCEPTA 2026! Please keep this email for your records.</p>
            <p>If you have any questions, feel free to contact us at ascacet@gmail.com</p>
            
            <div class="footer">
              <p>College of Engineering, Trivandrum</p>
              <p>January 29-30, 2026</p>
            </div>
          </div>
        </div>
      </body>
      </html>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`Confirmation email sent to ${registration.email}`);
  } catch (error) {
    console.error('Error sending email:', error);
    // Don't throw - email failure shouldn't break registration
  }
}

// Routes

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Server is running' });
});

// Get event pricing
app.get('/api/events/:eventId/pricing', (req, res) => {
  const { eventId } = req.params;
  const amount = EVENT_PRICING[eventId] || 0;
  res.json({ eventId, amount, currency: 'INR' });
});

// Create order (registration + payment)
app.post('/api/register', async (req, res) => {
  try {
    const { eventId, name, email, phone, teamMembers, additionalInfo } = req.body;

    // Validation
    if (!eventId || !name || !email || !phone) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const amount = EVENT_PRICING[eventId];
    if (!amount || amount === 0) {
      return res.status(400).json({ error: 'Invalid event or free event' });
    }

    // Create Razorpay order
    const order = await razorpay.orders.create({
      amount: amount,
      currency: 'INR',
      receipt: `INCEPTA_${eventId}_${Date.now()}`,
      notes: {
        eventId,
        name,
        email,
        phone,
      },
    });

    // Save registration (pending payment)
    const registration = {
      orderId: order.id,
      eventId,
      eventName: req.body.eventName || eventId,
      name,
      email,
      phone,
      teamMembers: teamMembers || null,
      additionalInfo: additionalInfo || null,
      amount,
      status: 'pending',
      paymentId: null,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    await saveRegistration(eventId, registration);

    res.json({
      success: true,
      orderId: order.id,
      amount: order.amount,
      currency: order.currency,
      key: process.env.RAZORPAY_KEY_ID,
      registration,
    });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ error: 'Failed to create registration', details: error.message });
  }
});

// Verify payment and update registration
app.post('/api/payment/verify', async (req, res) => {
  try {
    const { orderId, paymentId, signature, eventId } = req.body;

    if (!orderId || !paymentId || !signature || !eventId) {
      return res.status(400).json({ error: 'Missing required payment details' });
    }

    // Verify signature
    const text = `${orderId}|${paymentId}`;
    const generatedSignature = crypto
      .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
      .update(text)
      .digest('hex');

    if (generatedSignature !== signature) {
      return res.status(400).json({ error: 'Invalid payment signature' });
    }

    // Update registration status
    const registration = await updateRegistrationStatus(eventId, orderId, 'completed', paymentId);

    if (!registration) {
      return res.status(404).json({ error: 'Registration not found' });
    }

    // Send confirmation email
    await sendConfirmationEmail(registration);

    res.json({
      success: true,
      message: 'Payment verified and registration confirmed',
      registration,
    });
  } catch (error) {
    console.error('Payment verification error:', error);
    res.status(500).json({ error: 'Failed to verify payment', details: error.message });
  }
});

// Get registration status
app.get('/api/registrations/:eventId/:orderId', async (req, res) => {
  try {
    const { eventId, orderId } = req.params;
    const registration = await getRegistrationByOrderId(eventId, orderId);

    if (!registration) {
      return res.status(404).json({ error: 'Registration not found' });
    }

    res.json({ success: true, registration });
  } catch (error) {
    console.error('Get registration error:', error);
    res.status(500).json({ error: 'Failed to get registration', details: error.message });
  }
});

// Start server
app.listen(PORT, async () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`📧 Email configured: ${process.env.EMAIL_USER ? 'Yes' : 'No'}`);
  console.log(`💳 Razorpay configured: ${process.env.RAZORPAY_KEY_ID ? 'Yes' : 'No'}`);
  
  // Initialize MongoDB
  await connectMongoDB();
  
  // Initialize Google Sheets
  await initGoogleSheets();
});

