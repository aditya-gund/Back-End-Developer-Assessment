const jwt = require('jsonwebtoken');

// Payload: Any data you want to include in the token
const payload = {
  userId: 'testuserId', // Example: user's ID
  username: 'testusername' // Example: user's username
};

// Secret key used to sign the token (replace 'yourSecretKey' with your actual secret key)
const secretKey = '929f78b484399b58e445f263de224755';

// Generate JWT token
const token = jwt.sign(payload, secretKey, { expiresIn: '1h' }); // Token expires in 1 hour

console.log("Generated JWT Token:", token);
