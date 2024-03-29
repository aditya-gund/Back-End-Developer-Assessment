const crypto = require('crypto');

// Generate a random string of specified length
function generateRandomString(length) {
  return crypto.randomBytes(Math.ceil(length / 2))
    .toString('hex') // Convert to hexadecimal format
    .slice(0, length); // Trim to desired length
}

// Generate a JWT secret key
const JWT_SECRET_KEY = generateRandomString(32); // You can adjust the length as needed

console.log("JWT Secret Key:", JWT_SECRET_KEY);
