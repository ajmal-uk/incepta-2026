# INCEPTA 2026 Backend Server

Backend server for event registration and payment processing using Razorpay.

## Features

- Event registration with payment integration
- Razorpay payment gateway integration
- Email confirmation on successful registration
- JSON-based data storage (can be easily migrated to a database)
- RESTful API endpoints

## Setup

1. **Install dependencies:**
   ```bash
   cd server
   npm install
   ```

2. **Configure environment variables:**
   - Copy `.env.example` to `.env`
   - Fill in your Razorpay credentials
   - Configure email settings (Gmail example provided)

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
   ```

3. **Get Razorpay Credentials:**
   - Sign up at [Razorpay](https://razorpay.com/)
   - Get your Key ID and Key Secret from the dashboard
   - Use test mode credentials for development

4. **Configure Email (Gmail):**
   - Enable 2-factor authentication on your Gmail account
   - Generate an App Password: Google Account → Security → App Passwords
   - Use the app password in `EMAIL_PASS`

5. **Start the server:**
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

Registrations are stored in JSON files in the `data/` directory:
- `data/registrations_{eventId}.json` - One file per event

For production, consider migrating to a database (MongoDB, PostgreSQL, etc.).

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

