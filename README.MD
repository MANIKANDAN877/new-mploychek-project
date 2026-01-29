# MPloyChek – Software Intern Code Challenge

This project is a Single Page Application (SPA) developed as part of the
Software Intern code challenge for NSQTech Private Limited.

---

## Tech Stack

### Frontend
- Angular 12+
- TypeScript
- Angular Router
- RxJS

### Backend (Dummy API)
- Node.js
- TypeScript
- Express.js
- In-memory dummy data

---

## Features

### Login Page
- User ID
- Password
- Role selection (Admin / General User)
- Authentication using dummy API

---

### Dashboard
- Displays logged-in user details
- Fetches records via API
- Displays data in table format
- Access controlled based on user role

---

### Admin Features
- Admin-only user management
- Role-based UI rendering
- Dummy user data handling

---

### Async API Handling
- API delay simulated using parameter
- Loader shown during async operations
- Demonstrates non-blocking UI behavior

---

## Design Approach

- Modular Angular architecture
- Components for UI
- Services for API communication
- Guards for role-based access
- Dummy backend to simulate real-world APIs

---

## Dummy Login Credentials

### Admin
User ID: manikandan k s
Password: Manikolapan877@
Role: Admin  

### General User
User ID: user1
Password: Manikolapan877@
Role: General User  

---

## How to Run the Project

### Backend
```bash
cd backend
npm install
npm run dev
