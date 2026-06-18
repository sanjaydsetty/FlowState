# 🎵 FlowState

• Developed a full-stack playlist management application using MongoDB, Express.js, React.js, and Node.js.  
• Implemented JWT-based authentication with protected routes and bcrypt password hashing.  
• Designed RESTful APIs for playlist and song management with MongoDB Atlas integration.  
• Built a responsive user interface using Tailwind CSS with toast notifications and modern dashboard components.

---

## 🚀 Features

### Authentication
- User Registration
- User Login
- JWT Authentication
- Protected Routes
- Persistent Login Sessions

### Playlist Management
- Create Playlists
- View All Playlists
- Delete Playlists
- Playlist Song Count

### Song Management
- Add Songs
- View Songs
- Delete Songs
- Song Metadata Storage
  - Title
  - Artist
  - Album
  - Duration

### User Experience
- Responsive UI
- Toast Notifications
- Modern Dark Theme
- Dashboard Overview
- Secure API Access

---

## 🛠 Tech Stack

### Frontend
- React.js
- React Router DOM
- Axios
- Tailwind CSS
- React Icons
- React Hot Toast
- Vite

### Backend
- Node.js
- Express.js
- JWT Authentication
- bcryptjs

### Database
- MongoDB
- Mongoose

---

## 📂 Project Structure

```text
FlowState/
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── routes/
│   │   ├── middleware/
│   │   ├── models/
│   │   └── utils/
│   │
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/sanjaydsetty/FlowState.git
```

```bash
cd FlowState
```

---

## Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file:

```env
PORT=5000
MONGO_URI=YOUR_MONGODB_URI
JWT_SECRET=YOUR_SECRET_KEY
```

Run backend:

```bash
npm run dev
```

---

## Frontend Setup

```bash
cd frontend
npm install
```

Run frontend:

```bash
npm run dev
```

---

## API Endpoints

### Authentication

| Method | Endpoint | Description |
|----------|----------|----------|
| POST | /api/auth/register | Register User |
| POST | /api/auth/login | Login User |

### Playlists

| Method | Endpoint | Description |
|----------|----------|----------|
| GET | /api/playlists | Get User Playlists |
| POST | /api/playlists | Create Playlist |
| GET | /api/playlists/:id | Get Playlist Details |
| DELETE | /api/playlists/:id | Delete Playlist |

### Songs

| Method | Endpoint | Description |
|----------|----------|----------|
| POST | /api/songs/:playlistId | Add Song |
| DELETE | /api/songs/:songId | Delete Song |

---

## 🔒 Security Features

- Password Hashing using bcryptjs
- JWT Authentication
- Protected Backend Routes
- User-specific Playlist Access
- Environment Variable Protection

---

## 🎯 Future Improvements

- Playlist Editing
- Song Editing
- Search & Filter
- Playlist Cover Images
- Drag-and-Drop Song Ordering
- Music Streaming Integration
- User Profile Management

---

