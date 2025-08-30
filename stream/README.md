# 🚀 BOF-DA Group Registration App

A full-stack web application for managing project group registrations for the BOF Data Analytics program. Built with React + TypeScript frontend and Node.js backend with EmailJS integration.

## ✨ Features

- **Dynamic Registration Form** with real-time category availability
- **Category Limits** - Maximum 32 members per project group
- **Sheet.best Integration** for data storage and retrieval
- **Automated Email Notifications** via EmailJS
- **WhatsApp Group Integration** - Automatic group assignment
- **Admin Dashboard** for monitoring registrations
- **Responsive Design** - Works on all devices
- **CSV Export** functionality for admin users

## 🏗️ Project Structure

```
bof-da-da/
├── src/                          # Frontend (React + TypeScript)
│   ├── components/
│   │   ├── RegistrationForm.tsx  # Main registration form
│   │   └── AdminView.tsx         # Admin dashboard
│   ├── services/
│   │   └── api.ts               # API service layer
│   ├── types/
│   │   └── index.ts             # TypeScript types
│   ├── utils/
│   │   └── constants.ts         # App constants
│   └── App.tsx                  # Main app component
└── server/                      # Backend (Node.js + Express)
    ├── services/
    │   └── emailService.js      # EmailJS integration
    ├── routes/
    │   └── email.js             # Email API routes
    └── index.js                 # Express server
```

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ installed
- SMTP email account (Gmail, Outlook, etc.)
- Sheet.best API endpoint configured

### Frontend Setup (React)

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```
   The frontend will be available at:
   - User Registration: `http://localhost:5173`
   - Admin Dashboard: `http://localhost:5173/admin`

### Backend Setup (Node.js)

1. **Navigate to server directory:**
   ```bash
   cd server
   ```

2. **Install backend dependencies:**
   ```bash
   npm install
   ```

3. **Create environment variables:**
   ```bash
   cp .env.example .env
   ```

4. **Configure your `.env` file:**
   ```env
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your_email@gmail.com
   SMTP_PASS=your_app_password
   PORT=3001
   ```

5. **Start the backend server:**
   ```bash
   npm run dev
   ```
   The backend will be available at `http://localhost:3001`

## ⚙️ Configuration

### SMTP Email Setup (Nodemailer)

1. **For Gmail users:**
   - Enable 2-Factor Authentication on your Google account
   - Generate an App Password: [Google App Passwords](https://myaccount.google.com/apppasswords)
   - Use your Gmail address as `SMTP_USER`
   - Use the generated App Password as `SMTP_PASS`

2. **For Outlook/Hotmail users:**
   ```env
   SMTP_HOST=smtp-mail.outlook.com
   SMTP_PORT=587
   SMTP_USER=your_email@outlook.com
   SMTP_PASS=your_password
   ```

3. **For other email providers:**
   - Check your email provider's SMTP settings
   - Update `SMTP_HOST` and `SMTP_PORT` accordingly

### Email Template

The email template is built into the application and includes:
- Personalized welcome message with user's name
- Category-specific group assignment confirmation
- Direct WhatsApp group link button
- Professional BOF-DA branding

### Sheet.best Configuration

The app uses this Sheet.best endpoint: `https://api.sheetbest.com/sheets/a5d5a1d3-9817-4046-b787-ccf69327816a`

Expected columns in your Google Sheet:
- `fullName` - User's full name
- `email` - User's email address
- `category` - Selected project category
- `timestamp` - Registration timestamp (auto-generated)

## 🔗 WhatsApp Group Links

The app automatically assigns users to WhatsApp groups based on their selected category:

- **SME Sales**: [Join Group](https://chat.whatsapp.com/EVzG7CFI8DT34VDcNbqoPS?mode=ac_t)
- **Oil & Gas**: [Join Group](https://chat.whatsapp.com/FVXIougsEjW4jw9XBATjx8?mode=ac_t)
- **Budget**: [Join Group](https://chat.whatsapp.com/F2ERb3XSna1DqWP9WhOvui?mode=ac_t)
- **Inventory**: [Join Group](https://chat.whatsapp.com/HofEuLB9oYpHHsJOJrkgDe?mode=ac_t)
- **Social Media**: [Join Group](https://chat.whatsapp.com/KUQteqZmcmr8l101hsKbup?mode=ac_t)

## 🧪 Testing Locally

1. **Start both frontend and backend:**
   ```bash
   # Terminal 1 - Frontend
   npm run dev
   
   # Terminal 2 - Backend  
   cd server && npm run dev
   ```

2. **Test registration flow:**
   - Open `http://localhost:5173` for user registration
   - Open `http://localhost:5173/admin` for admin dashboard (password: `bof-admin-2025`)
   - Fill out the registration form
   - Submit and verify email is sent
   - Check admin dashboard for new registration

3. **Test API endpoints:**
   ```bash
   # Health check
   curl http://localhost:3001/api/health
   
   # Test email endpoint
   curl -X POST http://localhost:3001/api/send-email \
     -H "Content-Type: application/json" \
     -d '{"fullName":"Test User","email":"your-test@email.com","category":"SME Sales"}'
   ```

## 🚀 Deployment

### Frontend (Netlify)

1. **Build the frontend:**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify:**
   - Connect your GitHub repository to Netlify
   - Set build command: `npm run build`
   - Set publish directory: `dist`
   - Deploy!

### Backend (Railway/Render/Heroku)

1. **Prepare for deployment:**
   - Ensure all environment variables are set
   - Update CORS settings if needed
   - Set production PORT

2. **Deploy to your preferred platform**

## 📊 Admin Features

The admin dashboard (accessible at `/admin`) provides:
- **Password Protection** - Simple authentication to prevent unauthorized access
- **Real-time registration counts** per category
- **Category availability status** with visual indicators  
- **Complete registration list** with filtering
- **Email privacy controls** (show/hide email addresses)
- **CSV export** functionality
- **Auto-refresh** capabilities

### Admin Access
- **URL**: `http://localhost:5173/admin`
- **Password**: `bof-admin-2025` (change this in production!)
- **Features**: Full registration management and analytics

## 🛠️ Troubleshooting

### Common Issues

1. **EmailJS not working:**
   - Verify SMTP credentials are correct
   - For Gmail, ensure you're using an App Password, not your regular password
   - Check if 2-Factor Authentication is enabled (required for Gmail App Passwords)
   - Verify SMTP host and port settings for your email provider

2. **Sheet.best connection issues:**
   - Verify the API endpoint URL
   - Check Google Sheet permissions
   - Ensure column names match expected format

3. **Category limits not updating:**
   - Check network connection to Sheet.best
   - Verify API response format
   - Try refreshing the page

4. **CORS errors:**
   - Ensure backend CORS is configured for your frontend URL
   - Check if both servers are running on correct ports

## 📝 Environment Variables Reference

### Required for Backend (.env)

```env
# SMTP Configuration for Nodemailer
SMTP_HOST=smtp.gmail.com              # SMTP server host
SMTP_PORT=587                         # SMTP server port (587 for TLS, 465 for SSL)
SMTP_USER=your_email@gmail.com        # Your email address
SMTP_PASS=your_app_password           # Your email password or app password

# Server Configuration  
PORT=3001                            # Backend server port
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

---

**Built with ❤️ for the BOF Data Analytics Program**