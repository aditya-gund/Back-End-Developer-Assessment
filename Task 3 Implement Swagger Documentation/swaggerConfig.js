const swaggerJsdoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Your API Documentation",
      version: "1.0.0",
      description: "API documentation for your Node.js application",
    },
    servers: [
      {
        url: "http://localhost:3000", // Update with your server URL
      },
    ],
  },
  apis: ["./routes/*.js"], // Path to the API route files
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;
