/* Create a middleware function that logs each incoming request’s HTTP method, URL, and timestamp to the console */

// Express setup
const express = require("express");
const app = express();

// Middleware function to log HTTP method, URL, and timestamp
function httpMethodLog(req, res, next) {
    const timestamp = new Date().toISOString(); // More readable timestamp format
    const method = req.method;  // Get HTTP method from request object
    const url = req.url;       // Get URL from request object
    
    console.log(`[${timestamp}] ${method} ${url}`);
    next();
}

// Request handler
function userHandler(req, res) {
    // Get name from query parameters if needed
    const name = req.query.name;
    
    res.json({
        httpMethod: req.method,
        url: req.url,
        name: name
    });
}

// Endpoints
app.get("/user", httpMethodLog, userHandler);

// Start server
app.listen(3000);