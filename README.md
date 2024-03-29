
Task 1: Implement User Authentication with JWT
Instructions:
app.js: Entry point of the Node.js application. Start the application by running node app.js in your terminal.

routes/auth.js: Contains endpoints for user registration, login, and logout. To register a user, send a POST request to /api/auth/register with JSON body containing username and password. To login, send a POST request to /api/auth/login with JSON body containing username and password. To logout, send a GET request to /api/auth/logout.

middleware/authenticate.js: Middleware for verifying JWT authentication before allowing access to protected routes. Applied to sensitive routes to ensure only authenticated users can access them.

Task 2: Create API Endpoints for Data Retrieval
Instructions:
app.js: Entry point of the Node.js application.

routes/api.js: Contains API endpoints for fetching data from a public API. Access these endpoints by sending HTTP GET requests to /api/data. Filter the data based on categories and result limits by providing query parameters in the URL.

Task 3: Implement Swagger Documentation
Instructions:
app.js: Entry point of the Node.js application.

routes/api.js: Contains API endpoints documented using Swagger.

swaggerConfig.js: Contains the Swagger configuration defining metadata for the API documentation such as title, version, and description.

middleware/swaggerUi.js: Middleware for serving the Swagger UI at the /api-docs route. Access the interactive API documentation by opening http://localhost:3000/api-docs in your web browser.

Task 4: Secure API Endpoint for Authenticated Users Only
Instructions:
app.js: Entry point of the Node.js application.

routes/secureRoute.js: Contains the API endpoint restricted to authenticated users only. To access this endpoint, obtain a JWT token by registering or logging in as a user and include this token in the Authorization header of your request.
