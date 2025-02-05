const express = require("express");
const app = express();

//create a global variable to count the number of requests made
let requestCount = 0;

// instead of using the same logic to check at multiple places, we can use a function to perform the same task within the function
// call for the function at each endpoints to check for the conditions

function requestIncrement() {
    //increment the count of request everytime a request is made
    requestCount++;
    //display the requesCount made so far on the console.
    console.log("Total number of requests made = " + requestCount);

    //the middleware does not have access to the request object
}

//let us consider two endpoints
app.get("/add", function(req,res){ //endpoint 1 
    
    //call for the function to increase the request Count.
    requestIncrement();

    // main logic
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json({
        ans: a + b
    })
});

app.get("/multiply", function(req,res){ //endpoint 2
    
    //call for the function to increase the request Count.
    requestIncrement();

    // main logic
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json({
        ans: a * b
    })
});

app.listen(3000);