const express = require("express");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./swaggerConfig");

const app = express();
const PORT = process.env.PORT || 3000; // Set the port number (default to 3000 if not specified)

// Middleware to serve Swagger UI
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
