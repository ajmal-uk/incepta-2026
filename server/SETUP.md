# Backend Setup Guide

## Quick Setup

1. **Create `.env` file in the `server` directory** with the following content:

```env
# Server Configuration
PORT=3000
NODE_ENV=development

# Razorpay Configuration
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret

# Email Configuration (Gmail example)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password

# Frontend URL (for CORS)
FRONTEND_URL=http://localhost:5173
```

2. **Get Razorpay Credentials:**
   - Sign up at https://razorpay.com/
   - Go to Settings → API Keys
   - Copy your Key ID and Key Secret
   - Use test mode credentials for development

3. **Get Gmail App Password:**
   - Go to your Google Account settings
   - Enable 2-Factor Authentication
   - Go to Security → App Passwords
   - Generate a new app password for "Mail"
   - Use this password in `EMAIL_PASS`

4. **Install and Run:**
   ```bash
   cd server
   npm install
   npm start
   ```

## Testing

Use Razorpay test cards:
- Card Number: `4111 1111 1111 1111`
- CVV: Any 3 digits
- Expiry: Any future date
- Name: Any name

## Troubleshooting

- **CORS errors**: Make sure `FRONTEND_URL` matches your frontend URL
- **Email not sending**: Check your Gmail app password and ensure 2FA is enabled
- **Payment errors**: Verify your Razorpay credentials are correct

