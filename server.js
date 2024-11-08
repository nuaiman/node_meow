

// server.js
const express = require('express');
const connectDB = require('./config/db');
const authRoutes = require('./routes/auth');
require('dotenv').config();
const path = require('path');  // Add path module to serve HTML files

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());
app.use(express.static('public'));  // Serve static files from the "public" directory

// Serve the homepage
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));  // Serve index.html
});

// Serve the registration page
app.get('/register', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'register.html'));  // Serve register.html
});

// Serve the login page
app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'login.html'));  // Serve login.html
});

// Serve the portfolio
app.get('/portfolio', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'portfolio.html'));  // Serve portfolio.html
});

// Serve the logout page
app.get('/logout', (req, res) => {
  // Clear session or token (depending on your implementation)
  res.clearCookie('auth_token');  // Example, if using cookies
  res.redirect('/login');         // Redirect the user back to login
});

// Authentication Routes (API)
app.use('/api/auth', authRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
