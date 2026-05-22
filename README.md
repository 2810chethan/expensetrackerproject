# Expense Tracker and Budget Analysis System

## Project Overview

The Expense Tracker and Budget Analysis System is a full-stack MERN (MongoDB, Express.js, React.js, Node.js) web application developed to help users manage their daily expenses efficiently.

The application allows users to:
- Securely register and log in
- Login using Google Authentication
- Add and manage expenses
- Monitor spending habits
- Analyze expenses using graphical visualization

The system provides a simple and user-friendly platform for financial management. Secure authentication is implemented using JWT tokens, bcrypt password hashing, and Firebase Google Authentication.

Expense data is stored in MongoDB Atlas cloud database and displayed using interactive charts and dashboard analytics.

---

# Problem Statement

Managing personal expenses manually is difficult and time-consuming. Most users fail to properly track spending patterns and maintain budgets.

Traditional methods such as notebooks or spreadsheets are inefficient and difficult to analyze.

This project provides a digital solution that helps users:
- Record expenses easily
- Monitor spending behavior
- Maintain budgets
- Analyze expenses visually
- Access data securely from anywhere

---

# Objectives

- Develop a secure expense management system
- Implement user authentication
- Implement Google Authentication
- Store expense data in MongoDB Atlas
- Provide expense analytics and visualizations
- Display total expense calculations
- Generate budget limit alerts
- Improve financial tracking efficiency

---

# Features Implemented

## User Authentication
- User Registration
- User Login
- Google Authentication using Firebase
- JWT Token Authentication
- Secure Password Hashing using bcryptjs

## Expense Management
- Add Expense
- View Expense History
- Categorize Expenses
- Date-wise Expense Tracking

## Dashboard Features
- Total Expense Calculation
- Pie Chart Analytics
- Budget Limit Alert
- Expense Cards Display

## Additional Features
- Logout Functionality
- Responsive UI
- Cloud Deployment
- API Testing using Postman

---

# Technologies Used

## Frontend Technologies
- React.js
- Vite
- Axios
- React Router DOM
- Recharts
- Firebase Authentication
- CSS

## Backend Technologies
- Node.js
- Express.js
- JWT
- bcryptjs
- dotenv

## Database
- MongoDB Atlas

## Deployment Platforms
- Vercel (Frontend)
- Render (Backend)

---

# System Architecture

Frontend (React.js)
↓
Backend APIs (Node.js + Express.js)
↓
MongoDB Atlas Database

---

# Project Workflow

User Registration / Google Login
↓
User Authentication
↓
JWT Token Generated
↓
Dashboard Access
↓
Add Expense
↓
Expense Stored in MongoDB
↓
Expense Data Retrieved
↓
Analytics and Charts Displayed

---

# Frontend Development

The frontend application was developed using React.js and Vite.

Multiple pages were created including:
- Login Page
- Register Page
- Dashboard Page

React Router DOM was used for navigation between pages.

Axios was used for API communication between frontend and backend.

Firebase Authentication was integrated for Google Login functionality.

The dashboard includes:
- Expense input form
- Total expense display
- Budget limit warning
- Pie chart analytics
- Expense history cards

---

# Backend Development

The backend server was developed using Node.js and Express.js.

REST APIs were implemented for:
- User registration
- User login
- Adding expenses
- Fetching expenses

JWT tokens were generated for authentication purposes and bcryptjs was used for password hashing.

---

# Database Design

## Users Collection
Stores:
- Name
- Email
- Password

## Expenses Collection
Stores:
- User ID
- Amount
- Category
- Date
- Description

MongoDB Atlas cloud database was used to manage collections and store user data securely.

---

# API Endpoints

## Authentication APIs

### Register User
POST /api/auth/register

### Login User
POST /api/auth/login

---

## Expense APIs

### Add Expense
POST /api/expenses/add

### Fetch Expenses
GET /api/expenses/:userId

---

# Authentication Flow

User enters login credentials or Google Login
↓
Backend verifies user data
↓
JWT token generated
↓
Token returned to frontend
↓
Authenticated dashboard access granted

---

# Expense Analytics

Recharts library was used to visualize expenses using pie charts.

Analytics implemented:
- Category-wise expense distribution
- Total expense calculation
- Budget limit exceeded warning

This helps users better understand spending behavior.

---

# Testing

Postman was used to test backend APIs.

The following functionalities were tested:
- User Registration
- User Login
- Google Authentication
- Add Expense API
- Fetch Expense API
- JWT Authentication

All APIs were tested successfully during development.

---

# Deployment

## Frontend Deployment
Frontend application deployed using Vercel.

Live Link:
https://expensetrackerproject-fi86.vercel.app

## Backend Deployment
Backend server deployed using Render.

Backend API:
https://expensetrackerproject-3.onrender.com

## Database Hosting
MongoDB Atlas was used as the cloud database platform.

Deployment process included:
- Environment variable configuration
- MongoDB connection setup
- JWT secret key configuration
- Firebase configuration
- API URL updates

---

# Challenges Faced

- MongoDB Atlas configuration
- JWT authentication implementation
- Backend deployment issues in Render
- Environment variable setup
- Firebase Google Authentication integration
- API integration between frontend and backend
- Module path issues during deployment

---

# Results

The application successfully allows users to:
- Register securely
- Login using authentication
- Login using Google account
- Add and manage expenses
- View expense history
- Monitor total spending
- Analyze expenses using charts
- Receive budget limit alerts

The project demonstrates a complete MERN stack application workflow.

---

# Conclusion

The Expense Tracker and Budget Analysis System successfully demonstrates a full-stack MERN application with:
- Secure authentication
- Google Authentication
- Database integration
- REST APIs
- Analytics
- Cloud deployment

The project helped improve understanding of:
- MERN Stack Development
- React.js Frontend Development
- Node.js Backend Development
- MongoDB Atlas Integration
- Firebase Authentication
- JWT Authentication
- REST APIs
- Cloud Deployment

---

# Future Scope

- AI-based expense prediction
- Email notifications
- Mobile application development
- OCR bill scanning
- Downloadable reports
- Multi-user analytics
- Dark/Light theme switching

---

# Screenshots Included

- Login Page
- Register Page
- Google Login
- Dashboard
- Pie Chart Analytics
- Expense Cards
- Budget Alert

---

# Live Project Links

Frontend:
https://expensetrackerproject-fi86.vercel.app

Backend:
https://expensetrackerproject-3.onrender.com

GitHub Repository:
https://github.com/2810chethan/expensetrackerproject

---

# Author

Chethan Kalyan
