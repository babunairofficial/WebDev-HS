// Import the Express.js framework and store it in the 'express' constant
const express = require("express");

// Import body-parser to handle JSON payloads in requests
const bodyParser = require("body-parser");
//Without this, request.body would be undefined when receiving JSON data


// Create a new Express application instance
const app = express();

// Middleware to parse JSON bodies of requests
// This middleware must be added before defining routes
app.use(bodyParser.json());

// Define a POST route handler for the '/sum' endpoint
app.post("/sum", function(req, res){
    // Log the entire request body to the console for debugging
    console.log(req.body);

    // Extract 'a' from request body and convert it to integer
    // req.body.a accesses the 'a' property from the JSON/form data sent in request
    const a = parseInt(req.body.a);

    // Extract 'b' from request body and convert it to integer
    // req.body.b accesses the 'b' property from the JSON/form data sent in request
    const b = parseInt(req.body.b);

    // Send a JSON response back to the client
    // res.json() automatically sets Content-Type header to application/json
    // The response contains an object with 'ans' property set to the sum of a and b
    res.json({
        ans: a + b
    });
});

app.listen(3000);