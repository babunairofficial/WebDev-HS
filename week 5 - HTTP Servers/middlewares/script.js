const express = require("express");
const app = express();

//create a global variable to count the number of requests made
let requestCount = 0;

//let us consider two endpoints
app.get("/add", function(req,res){ //endpoint 1 
    //increment the count of request everytime a request is made
    requestCount++;
    //display the requesCount made so far on the console.
    console.log("Total number of requests made = " + requestCount);

    // main logic
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json({
        ans: a + b
    })
});

app.get("/multiply", function(req,res){ //endpoint 2
    //increment the count of request everytime a request is made
    requestCount++;
    //display the requesCount made so far on the console.
    console.log("Total number of requests made = " + requestCount);

    // main logic
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json({
        ans: a * b
    })
});

app.listen(3000);