# Project Documentation

## Overview

This document outlines the purpose and functionality of each file in the project.

## Setup & Configuration

- Install dependencies: Run `npm install`.
- Create an environment file (`./env`) with necessary variables like PORT and MONGODB_URL.
- Start the server using `npm start` or `node src/index.js`.

## Environment Variables

- PORT: The port number the server listens on.
- MONGODB_URL: The MongoDB connection string (without the database name).
- Other variables as required.

## Project Structure

- **src/utils/asyncHandler.js**  
  Provides a higher order function to catch asynchronous errors and pass them to the error handler.

- **src/utils/ApiResponse.js**  
  Defines a class to standardize API responses with status, data, message, and success indicator.

- **src/utils/ApiError.js**  
  Extends the built-in Error class to create a custom error handler with additional details.

- **src/index.js**  
  Loads environment variables, connects to the database, and starts the server.

- **src/db/db.js**  
  Handles the connection to MongoDB using Mongoose.

- **src/app.js**  
  Configures the Express application with middleware for JSON parsing, URL encoding, CORS, cookie parsing, and serving static files.

## API Endpoints

- This project is currently structured as a backend service. Endpoint documentation will be added as routes and controllers are implemented.

## Testing & Debugging

- Use in-built logging in the database connection and error handlers for debugging.
- Add further instructions here as needed for integration or unit tests.
