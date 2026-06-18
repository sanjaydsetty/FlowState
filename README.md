# 🎵 FlowState

A modern full-stack playlist management application built using the MERN Stack.

FlowState allows users to securely create playlists, manage songs, and organize their music collections through a responsive and intuitive interface.

---

## 🚀 Live Features

### Authentication

- User Registration
- User Login
- JWT Authentication
- Protected Routes
- Secure Password Hashing using bcrypt

### Playlist Management

- Create Playlists
- View All Playlists
- Delete Playlists
- Song Count Display

### Song Management

- Add Songs to Playlists
- View Songs
- Delete Songs
- Playlist Details Page

### User Experience

- Modern Dashboard UI
- Responsive Design
- Toast Notifications
- Personalized Welcome Message
- Confirmation Dialogs
- Smooth Hover Effects

---

## 🛠 Tech Stack

### Frontend

- React.js
- React Router DOM
- Axios
- Tailwind CSS
- React Hot Toast
- React Icons

### Backend

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT Authentication
- bcryptjs

---

## 📂 Project Structure

```text
FlowState
│
├── backend
│   ├── src
│   │   ├── config
│   │   ├── controllers
│   │   ├── middleware
│   │   ├── models
│   │   ├── routes
│   │   └── utils
│   │
│   ├── .env
│   ├── package.json
│   └── server.js
│
├── frontend
│   ├── src
│   │   ├── api
│   │   ├── components
│   │   ├── pages
│   │   ├── services
│   │   └── assets
│   │
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```

---

## 🔐 Authentication Flow

```text
User Login/Register
        │
        ▼
Backend Validation
        │
        ▼
JWT Token Generated
        │
        ▼
Stored in Local Storage
        │
        ▼
Protected API Requests
```

---

## 🗄 Database Schema

### User

```javascript
{
  name,
  email,
  password
}
```

### Playlist

```javascript
{
  name,
  user
}
```

### Song

```javascript
{
  title,
  artist,
  album,
  duration,
  playlist
}
```

---

## API Endpoints

### Authentication

```http
POST /api/auth/register
POST /api/auth/login
```

### Playlists

```http
GET    /api/playlists
POST   /api/playlists
GET    /api/playlists/:id
DELETE /api/playlists/:id
```

### Songs

```http
POST   /api/songs/:playlistId
DELETE /api/songs/:songId
```

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/your-username/FlowState.git

cd FlowState
```

### Backend Setup

```bash
cd backend

npm install
```

Create a `.env` file:

```env
PORT=5000

MONGO_URI=YOUR_MONGODB_CONNECTION_STRING

JWT_SECRET=YOUR_SECRET_KEY
```

Start Backend:

```bash
npm run dev
```

---

### Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

---

## Future Enhancements

- Edit Playlist
- Edit Song
- Playlist Cover Images
- Music Streaming API Integration
- Drag & Drop Playlist Reordering
- Search and Filter Songs
- User Profile Page

---

## Learning Outcomes

This project helped strengthen understanding of:

- REST API Design
- Authentication and Authorization
- JWT Security
- MongoDB Data Modeling
- React State Management
- MERN Stack Architecture
- Tailwind CSS
- Full-Stack Deployment

---

