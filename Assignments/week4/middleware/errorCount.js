/*
You have to create a middleware for logging the number of errors on a server

You have been given an express server which has a few endpoints.

Your task is to
1. Ensure that if there is ever an exception, the end user sees a status code of 404
2. Maintain the errorCount variable whose value should go up every time there is an exception in any endpoint
*/

const express = require("express");

const app = express();

let requestCount = 0;
let errorCount = 0;

app.get("/user", function (req, res) {
    // throw an error with message "Some Error"
    throw new Error("Some Error");
});

app.use(function(req, res, next){
    requestCount++; 
    next();
})

app.get("/errorCount", function (req, res) {
    // return a json response with errorCount variable value
    res.status(200).json({ errorCount });
});

// Error Handling Middleware
app.use((err, req, res, next) => {
    // send a 404 status code as response to the user if there is an exception in any endpoint 
    res.status(404).send({});

    // increment the errorCount variable by 1
    errorCount++;
});

app.listen(3000);

