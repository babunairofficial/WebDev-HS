/* create a backend server in node.js, that returns the sum endpoint */

const express = require('express');
const cors = require('cors'); //install cors to bypass browser issues with cors

const app = express();

app.use(express.json());
app.use(cors());

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
//sum endpoint
app.post('/sum', endpointLog, sumHandler);

app.listen(3000);