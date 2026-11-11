# 🚨 EMSTRAP – Emergency Response Ecosystem

### A Full-Stack Emergency Response and Ambulance Management Platform

EMSTRAP is a full-stack emergency response platform designed to simplify emergency ambulance booking, improve response coordination, and provide accessible emergency assistance through a modern web interface.

This project is a full-stack rebuild of the EMSTRAP emergency response website, developed as part of a Full Stack Development Internship Selection Task.

The original website contained deliberate errors. These were identified, documented, and fixed during the rebuilding process.

---

## 🌐 Project Links

- **Live Website:** Coming Soon
- **Backend API:** Coming Soon
- **GitHub Repository:** https://github.com/VishwasMR-30/Emstrap

---

## ✨ Key Features

### 1. Home Page
- Modern landing page with an emergency-response theme.
- About section.
- How It Works timeline.
- Services and solutions overview.
- Contact form.

### 2. Emergency Booking Demo
- Emergency ambulance booking workflow.
- Multiple ambulance types and pricing.
- Driver information card.
- Booking system activity log.
- Live map using Leaflet and OpenStreetMap.
- Moving ambulance visualization.

### 3. Solution Pages
- Nine individual solution pages.
- Data-driven page architecture.
- Dedicated briefing request forms.

### 4. Product Pages
Four product sections:
- Connect
- Ride
- Shield
- Command

Each product includes its own request form.

### 5. SOS Emergency Alert
- SOS emergency button.
- Press-and-hold interaction for 3 seconds.
- GPS location capture.
- Emergency alert submission.

### 6. Careers
- Available job roles.
- Role details popup.
- Job application forms.

### 7. Additional Pages
- About
- Privacy Policy
- Terms and Conditions
- Contact

### 8. Responsive Design
- Dark mission-control-inspired interface.
- Responsive layouts.
- Interactive UI components.

---

## 🛠️ Technology Stack

| Category | Technologies |
|---|---|
| Frontend | React.js, Vite |
| Routing | React Router |
| Styling | CSS, Tailwind CSS |
| Animations | Framer Motion |
| Maps | Leaflet, OpenStreetMap |
| Backend | Node.js, Express.js |
| Database | MongoDB Atlas |
| Local Storage | JSON file-based storage |
| Version Control | Git, GitHub |
| Frontend Hosting | Vercel |
| Backend Hosting | Render |

---

## 📁 Project Structure

```text
EMSTRAP/
│
├── client/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── data/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── api.js
│   │   ├── index.css
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
│
├── server/
│   ├── index.js
│   ├── store.js
│   ├── package.json
│   └── .env.example
│
├── FIXES.md
├── README.md
└── .gitignore
```

---

## ⚙️ Installation and Setup

### Prerequisites

Make sure you have installed:

- Node.js
- npm
- Git
- VS Code (recommended)

### Step 1: Clone the Repository

```bash
git clone https://github.com/VishwasMR-30/Emstrap.git
```

```bash
cd Emstrap
```

### Step 2: Set Up the Backend

Open a terminal:

```bash
cd server
```

Install dependencies:

```bash
npm install
```

Create your environment file:

```powershell
copy .env.example .env
```

Start the backend:

```bash
npm run dev
```

Backend URL:

`http://localhost:5000`

### Step 3: Set Up the Frontend

Open another terminal:

```bash
cd client
```

Install dependencies:

```bash
npm install
```

Start the frontend:

```bash
npm run dev
```

Frontend URL:

`http://localhost:5173`

---

## 🔐 Environment Variables

### Backend – `server/.env`

| Variable | Description |
|---|---|
| `PORT` | Backend server port (default: 5000) |
| `CLIENT_ORIGIN` | Allowed frontend origin(s) |
| `ADMIN_KEY` | Authentication key for the admin endpoint |
| `MONGODB_URI` | MongoDB Atlas connection string |

If `MONGODB_URI` is not configured, the backend uses local JSON file-based storage.

### Frontend – `client/.env`

| Variable | Description |
|---|---|
| `VITE_API_URL` | Backend API base URL |

Default:

`http://localhost:5000`

---

## 🔌 API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/health` | API health check |
| POST | `/api/contact` | Submit contact message |
| POST | `/api/careers` | Submit job application |
| POST | `/api/briefings` | Submit solution briefing |
| POST | `/api/bookings` | Create ambulance booking |
| GET | `/api/bookings/:id` | Retrieve booking details |
| POST | `/api/sos` | Submit emergency SOS alert |
| GET | `/api/admin/:collection?key=...` | Read stored collection data |

The backend includes input validation, request-size limits, and rate limiting.

---

## 🛡️ Error Identification and Fixes

The original website contained deliberate bugs and implementation issues.

During the rebuilding process:

- Errors were identified and documented.
- Relevant frontend and backend issues were fixed.
- The application was rebuilt with a structured project architecture.
- API functionality was implemented for emergency-related workflows.

For the complete list of identified issues and fixes, refer to **[FIXES.md](FIXES.md)**.

---

## 🚀 Future Improvements

- Real-time ambulance tracking.
- Integration with emergency service providers.
- Improved driver and patient dashboards.
- SMS and push notifications.
- Advanced emergency analytics.
- Production-ready authentication and authorization.
- Cloud database and deployment enhancements.

---

## 👨‍💻 Developer

**Vishwas M R**

Information Science and Engineering

GitHub: [VishwasMR-30](https://github.com/VishwasMR-30)

Project: [EMSTRAP](https://github.com/VishwasMR-30/Emstrap)

---

## 📄 License

This project was developed as part of a Full Stack Development Internship Selection Task.

---

<p align="center">
  **EMSTRAP – Faster Connections. Smarter Emergency Response.**
</p>