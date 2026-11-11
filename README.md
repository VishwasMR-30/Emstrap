# EMSTRAP: Emergency Response Ecosystem (Full Stack Rebuild)

A full stack rebuild of the EMSTRAP emergency response website, made for a full stack development internship selection task.
The original site contained deliberate errors. They were found, logged and fixed (see [FIXES.md](FIXES.md)).

- **Live site:** _add your Vercel link here_
- **API:** _add your Render link here_

## Features
- Home page: hero, About, How It Works timeline, Services, 9 Solutions, Contact form
- **Platform Demo:** emergency booking flow, ambulance types and prices, driver card, system log, and a live map with a moving ambulance (Leaflet + OpenStreetMap)
- **Solution pages:** 9 pages from one data-driven template, each with its own briefing request form
- **Product pages:** Connect, Ride, Shield and Command, with their own request forms
- **About, Privacy and Terms pages**
- **Careers:** open roles, role details popup, and two application forms
- **SOS button:** hold for 3 seconds to send an alert with your GPS location
- Responsive, dark "mission control" design

## Tech stack
| Part | Technology |
|---|---|
| Frontend | React (Vite), React Router, Tailwind CSS, Framer Motion, Leaflet |
| Backend | Node.js, Express |
| Database | MongoDB (Atlas) in production; a local JSON file when no database is configured |
| Hosting | Vercel (frontend), Render (backend) |

## Project structure
```
client/   React frontend
server/   Express API (index.js routes, store.js database layer)
FIXES.md  Errors found in the original site and how they were fixed
```

## Run locally
**Backend**
```
cd server
copy .env.example .env      (Windows)   |   cp .env.example .env   (Mac/Linux)
npm install
npm run dev                 # http://localhost:5000
```
**Frontend**
```
cd client
npm install
npm run dev                 # http://localhost:5173
```

## Environment variables
Backend (`server/.env`):
| Name | Purpose |
|---|---|
| `PORT` | Port to listen on (default 5000) |
| `CLIENT_ORIGIN` | Frontend address(es) allowed to call the API, comma separated |
| `ADMIN_KEY` | Password for the read-only admin endpoint |
| `MONGODB_URI` | MongoDB connection string (leave empty to use a local file) |

Frontend (`client/.env`, optional): `VITE_API_URL` is the backend address (default `http://localhost:5000`).

## API
| Method | Endpoint | What it does |
|---|---|---|
| GET | `/api/health` | Health check |
| POST | `/api/contact` | Save a contact message |
| POST | `/api/careers` | Save a job application |
| POST | `/api/briefings` | Save a solution briefing request |
| POST | `/api/bookings` | Create an ambulance booking (price is set by the server) |
| GET | `/api/bookings/:id` | Get a booking |
| POST | `/api/sos` | Save an SOS alert with location |
| GET | `/api/admin/:collection?key=...` | Read saved data (needs `ADMIN_KEY`) |

All inputs are validated on the server, request size is limited, and requests are rate limited.

## Errors found and fixed
See [FIXES.md](FIXES.md) for the full table.
