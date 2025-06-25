# 💬 Chat Application

A **full-stack chat app** built with **React**, **Node.js**, **Express**, **MongoDB**, and **Socket.IO**.  
Enjoy real-time messaging, image uploads, profile management, and theme customization—all in a modern, responsive UI.

---

## 🚀 Features

### 🌐 Frontend
- **🔐 User Authentication:** Sign up, log in, and log out securely.
- **⚡ Real-Time Messaging:** Instant chat with Socket.IO.
- **🖼️ Image Uploads:** Attach images to messages and update your profile picture.
- **📱 Responsive Design:** Looks great on all devices (TailwindCSS + DaisyUI).
- **🎨 Theme Customization:** Personalize your experience with multiple themes.
- **🟢 User Status:** See who's online in real time.

### 🛠️ Backend
- **RESTful API:** Built with Express.js for authentication, messaging, and user management.
- **MongoDB Database:** Stores users and messages.
- **JWT Authentication:** Secure sessions with cookies.
- **Cloudinary Integration:** Fast, reliable image storage.
- **WebSocket Support:** Real-time communication with Socket.IO.

---

## 🧰 Tech Stack

| Frontend           | Backend           |
|--------------------|------------------|
| React              | Node.js          |
| Vite               | Express.js       |
| Zustand            | MongoDB          |
| TailwindCSS        | Socket.IO        |
| DaisyUI            | Cloudinary       |

---

## ⚙️ Installation

### Prerequisites
- [Node.js](https://nodejs.org/) & npm
- [MongoDB](https://www.mongodb.com/) connection string
- [Cloudinary](https://cloudinary.com/) account

---

### Backend Setup

```bash
cd backend
npm install
```

1. Create a `.env` file in the `backend` directory:
    ```env
    MONGO_URI=<your-mongodb-connection-string>
    PORT=5001
    CLOUDINARY_CLOUD_NAME=<your-cloudinary-cloud-name>
    CLOUDINARY_API_KEY=<your-cloudinary-api-key>
    CLOUDINARY_API_SECRET=<your-cloudinary-api-secret>
    JWT_SECRET=<your-jwt-secret>
    ```
2. Start the backend:
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

## 📝 Usage

1. **Sign Up:** Create a new account.
2. **Log In:** Access your account.
3. **Start Chatting:** Select a user and start a conversation.
4. **Send Messages:** Type a message or upload an image.
5. **Profile Management:** Update your profile picture and details.
6. **Theme Customization:** Choose your favorite theme.

---

## 📁 Folder Structure

```
backend/
├── .env
├── src/
│   ├── controllers/
│   ├── lib/
│   ├── middleware/
│   ├── models/
│   ├── routes/
frontend/
├── src/
│   ├── components/
│   ├── constants/
│   ├── lib/
│   ├── pages/
│   ├── store/
│   └── index.css
```

---

## 📡 API Endpoints

### Authentication
- `POST /api/auth/register` — Register a new user
- `POST /api/auth/login` — Log in
- `POST /api/auth/logout` — Log out
- `PUT /api/auth/update-profile` — Update profile
- `GET /api/auth/check` — Check authentication status

### Messaging
- `GET /api/msg/users` — Get all users except the logged-in user
- `GET /api/msg/:id` — Get messages between users
- `POST /api/msg/send/:id` — Send a message

---

## 📜 License

This project is licensed under the [MIT License](LICENSE).

---

## 🙏 Acknowledgments

- [React](https://react.dev/)
- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Cloudinary](https://cloudinary.com/)
- [Socket.IO](https://socket.io/)
- [TailwindCSS](https://tailwindcss.com/)
- [DaisyUI](https://daisyui.com/)

---
