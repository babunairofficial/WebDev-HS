/* create a backend server in node.js, that returns the sum endpoint */

const express = require('express');
// const cors = require('cors'); //install cors to bypass browser issues with cors

const app = express();

app.use(express.json());
// app.use(cors());

//middleware
function endpointLog(req, res, next) {
    console.log("endpointLog hit");
    next();
}

//Request handler
function sumHandler(req, res) {
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);

    res.json({
        ans: a + b
    });
}

//to run both the frontend and backend on the same port, delete the cors and use the following 
function rootHandler(req, res) {
    //send the frontend file 
    res.sendFile(__dirname + "/public/index.html");
}
//endpoint to the frontend 
app.get('/', endpointLog, rootHandler)

//sum endpoint
app.post('/sum', endpointLog, sumHandler);

app.listen(3000);