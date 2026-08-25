# Student Management System

A full-stack Student Management System built with **React, Node.js, Express.js, and PostgreSQL**. The application provides a modern interface for managing student records with authentication, dashboard statistics, and CRUD operations.

## 🚀 Features

* User registration and login
* Protected dashboard
* Add new students
* View student records
* Edit student information
* Delete student records
* Student details page
* Dashboard statistics
* Dashboard charts
* Responsive React frontend
* REST API backend
* PostgreSQL database
* JWT-based authentication
* Drizzle ORM for database management

## 🛠️ Tech Stack

### Frontend

* React.js
* React Router
* JavaScript
* CSS
* Vite
* Axios

### Backend

* Node.js
* Express.js
* PostgreSQL
* Drizzle ORM
* JWT Authentication

## 📁 Project Structure

```text
student-management-system/
│
├── backend/
│   ├── controllers/
│   ├── db/
│   ├── drizzle/
│   ├── middleware/
│   ├── routes/
│   ├── package.json
│   └── server.js
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── styles/
│   │   └── App.jsx
│   ├── package.json
│   └── vite.config.js
│
├── .gitignore
└── README.md
```

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
cd student-management-system
```

### 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file inside the `backend` folder:

```env
DATABASE_URL=your_postgresql_database_url
JWT_SECRET=your_jwt_secret
PORT=5000
```

Run the backend:

```bash
npm run dev
```

### 3. Frontend Setup

Open another terminal:

```bash
cd frontend
npm install
npm run dev
```

The frontend will run using the Vite development server.

## 🔐 Environment Variables

For security, environment variables are not included in the repository.

Example:

```env
DATABASE_URL=your_database_url
JWT_SECRET=your_secret
PORT=5000
```

Never commit your actual `.env` file to GitHub.

## 📌 Main Functionality

### Authentication

Users can register and log in securely. Protected routes prevent unauthorized access to the dashboard.

### Student Management

Authenticated users can:

* Add students
* View students
* Update student information
* Delete students
* View individual student details

### Dashboard

The dashboard provides an overview of student information using statistics and charts.

## 🔌 API Routes

### Authentication

```text
POST /api/auth/signup
POST /api/auth/login
```

### Students

```text
GET    /api/students
POST   /api/students
PUT    /api/students/:id
DELETE /api/students/:id
```

### Dashboard

```text
GET /api/dashboard
```

## 📸 Screenshots

Add screenshots of your application here after completing the UI.

Example:

```text
screenshots/
├── home.png
├── login.png
├── dashboard.png
└── students.png
```

## 🔮 Future Improvements

* Search and filter students
* Pagination
* Role-based admin access
* Export student data
* Improved validation
* Deployment with a live demo
* Advanced dashboard analytics

## 👩‍💻 Author

**Tanuja Gupta**

Student Management System — Full Stack Web Development Project
