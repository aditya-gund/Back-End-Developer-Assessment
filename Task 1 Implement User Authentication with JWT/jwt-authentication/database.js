// database.js (In-Memory Database)
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const users = {}; // In-memory "database" to store user data
const JWT_SECRET = process.env.JWT_SECRET || 'your_secret_key';

// Function to register a new user
async function registerUser(username, password) {
    if (users[username]) {
        throw new Error('User already exists');
    }
    const hashedPassword = await bcrypt.hash(password, 10); // Hash password
    users[username] = { username, password: hashedPassword }; // Store user in the database
}

// Function to authenticate user login and generate JWT token
async function loginUser(username, password) {
    const user = users[username];
    if (!user) {
        throw new Error('Invalid username or password');
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
        throw new Error('Invalid username or password');
    }
    const token = jwt.sign({ username }, JWT_SECRET, { expiresIn: '1h' }); // Generate JWT token
    return token;
}

module.exports = { users, registerUser, loginUser };
