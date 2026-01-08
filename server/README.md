# INCEPTA 2026 Backend Server

Backend server for event registration and payment processing using Razorpay.

## Features

- Event registration with payment integration
- Razorpay payment gateway integration
- Email confirmation on successful registration
- MongoDB database storage for registrations
- Google Sheets integration for real-time data tracking
- JSON-based backup storage
- RESTful API endpoints

## Setup

1. **Install dependencies:**
   ```bash
   cd server
   npm install
   ```

2. **Configure environment variables:**
   - Create a `.env` file in the `server/` directory
   - Fill in all required credentials

   ```env
   PORT=3000
   NODE_ENV=development
   
   # Razorpay Configuration
   RAZORPAY_KEY_ID=your_razorpay_key_id
   RAZORPAY_KEY_SECRET=your_razorpay_key_secret
   
   # Email Configuration
   EMAIL_HOST=smtp.gmail.com
   EMAIL_PORT=587
   EMAIL_USER=your_email@gmail.com
   EMAIL_PASS=your_app_password
   
   # Frontend URL (for CORS)
   FRONTEND_URL=http://localhost:5173
   
   # MongoDB Configuration (Optional but recommended)
   MONGODB_URI=mongodb://localhost:27017/incepta2026
   # OR for MongoDB Atlas:
   # MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/incepta2026
   MONGODB_DB_NAME=incepta2026
   
   # Google Sheets Configuration (Optional but recommended)
   GOOGLE_SHEETS_ID=your_google_sheet_id
   GOOGLE_SHEETS_CREDENTIALS={"type":"service_account","project_id":"...","private_key_id":"...","private_key":"...","client_email":"...","client_id":"...","auth_uri":"...","token_uri":"...","auth_provider_x509_cert_url":"...","client_x509_cert_url":"..."}
   ```

3. **Get Razorpay Credentials:**
   - Sign up at [Razorpay](https://razorpay.com/)
   - Get your Key ID and Key Secret from the dashboard
   - Use test mode credentials for development

4. **Configure Email (Gmail):**
   - Enable 2-factor authentication on your Gmail account
   - Generate an App Password: Google Account → Security → App Passwords
   - Use the app password in `EMAIL_PASS`

5. **Setup MongoDB (Optional but recommended):**
   
   **Option A: Local MongoDB**
   - Install MongoDB locally: [MongoDB Installation Guide](https://www.mongodb.com/docs/manual/installation/)
   - Start MongoDB service
   - Use connection string: `mongodb://localhost:27017/incepta2026`
   
   **Option B: MongoDB Atlas (Cloud)**
   - Sign up at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
   - Create a free cluster
   - Create a database user
   - Whitelist your IP address (or use 0.0.0.0/0 for development)
   - Get connection string from "Connect" → "Connect your application"
   - Format: `mongodb+srv://username:password@cluster.mongodb.net/incepta2026`
   
   - Set `MONGODB_URI` in `.env` file
   - Set `MONGODB_DB_NAME` (default: `incepta2026`)

6. **Setup Google Sheets (Optional but recommended):**
   
   - Go to [Google Cloud Console](https://console.cloud.google.com/)
   - Create a new project or select an existing one
   - Enable Google Sheets API:
     - Navigate to "APIs & Services" → "Library"
     - Search for "Google Sheets API"
     - Click "Enable"
   - Create Service Account:
     - Go to "APIs & Services" → "Credentials"
     - Click "Create Credentials" → "Service Account"
     - Fill in details and create
     - Click on the created service account
     - Go to "Keys" tab → "Add Key" → "Create new key" → Choose JSON
     - Download the JSON file
   - Share Google Sheet with Service Account:
     - Create a new Google Sheet or use an existing one
     - Click "Share" button
     - Add the service account email (from the JSON file, `client_email` field)
     - Give "Editor" permissions
     - Copy the Sheet ID from the URL: `https://docs.google.com/spreadsheets/d/{SHEET_ID}/edit`
   - Add to `.env`:
     - Set `GOOGLE_SHEETS_ID` to your Sheet ID
     - Set `GOOGLE_SHEETS_CREDENTIALS` to the entire JSON content from the downloaded file (as a single-line string)

7. **Start the server:**
   ```bash
   npm start
   # or for development with auto-reload
   npm run dev
   ```

## API Endpoints

### Health Check
- `GET /api/health` - Check server status

### Event Pricing
- `GET /api/events/:eventId/pricing` - Get pricing for an event

### Registration
- `POST /api/register` - Create registration and Razorpay order
  ```json
  {
    "eventId": "hackathon",
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "1234567890",
    "teamMembers": ["Member 1", "Member 2"],
    "additionalInfo": "Optional info"
  }
  ```

### Payment Verification
- `POST /api/payment/verify` - Verify payment and confirm registration
  ```json
  {
    "orderId": "order_xxx",
    "paymentId": "pay_xxx",
    "signature": "signature_xxx",
    "eventId": "hackathon"
  }
  ```

### Get Registration
- `GET /api/registrations/:eventId/:orderId` - Get registration details

## Data Storage

Registrations are stored in multiple locations for redundancy and convenience:

1. **MongoDB Database** (Primary storage)
   - Collection: `registrations`
   - Stores all registration data with full details
   - Enables efficient querying and data management
   - Set `MONGODB_URI` in `.env` to enable

2. **Google Sheets** (Real-time tracking)
   - Automatically creates a sheet for each event type
   - Updates in real-time as registrations are created/updated
   - Great for non-technical team members to view data
   - Set `GOOGLE_SHEETS_ID` and `GOOGLE_SHEETS_CREDENTIALS` in `.env` to enable

3. **JSON Files** (Backup storage)
   - `data/registrations_{eventId}.json` - One file per event
   - Serves as a local backup
   - Always enabled

**Note:** If MongoDB or Google Sheets are not configured, the server will continue to work using JSON files only. The system gracefully handles missing configurations.

## Event Pricing

Event prices are configured in `server.js` in the `EVENT_PRICING` object. Prices are in paise (100 paise = 1 rupee).

## Email Templates

Confirmation emails are sent using Nodemailer with HTML templates. Customize the email template in the `sendConfirmationEmail` function in `server.js`.

## Security Notes

- Never commit `.env` file to version control
- Use environment variables for all sensitive data
- In production, use HTTPS
- Validate and sanitize all inputs
- Consider rate limiting for API endpoints

