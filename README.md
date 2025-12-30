# Ellivate Growth Engine

Ellivate Growth Engine is a full-stack web application built for **Ellivate Socials**, designed to capture and manage inbound leads through a professional contact form with real email delivery.

The project consists of a **React (Vite) frontend** and a **Node.js + Express backend** integrated with **Resend** for transactional email handling.

---

## Features

- Responsive contact form
- Real email notifications for new leads
- Secure backend API (API keys not exposed)
- Toast-based user feedback on form submission
- Clean and scalable project structure
- Ready for deployment and future integrations

---

## Tech Stack

### Frontend
- React (Vite)
- TypeScript
- Tailwind CSS
- shadcn/ui
- Lucide Icons

### Backend
- Node.js
- Express
- Resend (Email API)
- dotenv
- CORS

---
2. Frontend Setup
```bash
npm install
npm run dev
```

Frontend will run on:

http://localhost:5173

3. Backend Setup

```bash
cd server
npm install
```

Create a .env file inside the server folder:

RESEND_API_KEY=your_resend_api_key
PORT=5000


Start the backend server:
```bash
npm run dev
```

Backend will run on:

http://localhost:5000

Contact Form Flow

User submits the contact form

Frontend sends a POST request to /contact

Backend processes the request

Resend sends a notification email to the admin inbox

User receives success feedback via toast

