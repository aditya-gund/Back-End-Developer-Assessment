// auth.js

const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const router = express.Router();
const { users, registerUser, loginUser } = require('./database'); // Import user database functions

// Endpoint for user registration
router.post('/register', async (req, res) => {
    try {
        const { username, password } = req.body;
        await registerUser(username, password); // Register user
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message }); // Handle errors
    }
});

// Endpoint for user login
router.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        const token = await loginUser(username, password); // Login user and generate JWT token
        res.json({ token });
    } catch (error) {
        res.status(401).json({ message: error.message });
    }
});

// Protected route accessible only with a valid JWT token
router.get('/protected', authenticateToken, (req, res) => {
    res.json({ message: 'Protected route', user: req.user });
});

// Middleware function to authenticate JWT token
function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
    // Verify JWT token
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) {
            console.error('JWT verification error:', err); // Log JWT verification error
            return res.status(403).json({ message: 'Forbidden' });
        }
        console.log('Decoded JWT payload:', user); // Log decoded JWT payload
        req.user = user;
        next();
    });
}

module.exports = router;
