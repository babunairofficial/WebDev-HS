/* create a backend server in node.js, that returns the sum endpoint */

const express = require('express');
const app = express();

//middleware
function endpointLog(req, res, next) {
    console.log("endpointLog hit");
    next();
}

//Request handler
function sumHandler(req, res) {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json({
        ans: a + b
    });
}
//sum endpoint
app.get('/sum', endpointLog, sumHandler);

app.listen(3000);