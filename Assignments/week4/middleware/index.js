/*
You have been given an express server which has a few endpoints.

Your task is to create a global middleware (app.use) which will maintain a count of the number of 
requests made to the server in the global requestCount variable
*/


const express = require("express");

const app = express();

let requestCount = 0;

app.use(function(req, res, next){
    requestCount++; 
    next();
})

// create a route for GET request on /user path
app.get("/user", function (req, res) {
    //return a json response and contains Sachin name in it
    res.status(200).json({ name: "Sachin" });
});

// create a route for POST request on /user path
app.post("/user", function (req, res) {
    res.status(200).json({ msg: "created dummy user" });
});

// create a route for GET request on /requestCount path
app.get("/requestCount", function (req, res) {
    res.status(200).json({ requestCount });
});

app.listen(3000);
