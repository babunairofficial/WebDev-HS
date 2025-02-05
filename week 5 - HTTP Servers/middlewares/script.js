/* middlewares */

const express = require("express");
const app = express();

//create a global variable to count the number of requests made
let requestCount = 0;

// instead of using the same logic to check at multiple places, we can use a function to perform the same task within the function
// call for the function at each endpoints to check for the conditions

function requestIncrement(req, res, next) {
    //increment the count of request everytime a request is made
    requestCount++;
    //display the requesCount made so far on the console.
    console.log("Total number of requests made = " + requestCount);

    next();
}

function sumHandler(req, res){
    // main logic
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json({
        ans: a + b
    });
}

function multiplyHandler(req, res){
    // main logic
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json({
        ans: a * b
    });
}
        
//let us consider two endpoints

app.get("/add", requestIncrement, sumHandler) //endpoint 1
//using chain of handlers

app.get("/multiply", requestIncrement, multiplyHandler) //endpoint 2 

// alternatively, app.use can help to avoid typing in requestIncrement handler in each endpoints.

app.listen(3000);