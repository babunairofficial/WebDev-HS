const express = require("express");
const app = express();

//endpoints
app.get("/add", function(req,res){

    //using the values inserted in query
    //use parseInt method parses a string and returns an integer. 

    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json({
        ans: a + b
    })
});

app.get("/multiply", function(req,res){
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json({
        ans: a * b
    })
});

app.get("/divide", function(req,res){
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json({
        ans: a / b
    })
});

app.get("/subtract", function(req,res){
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json({
        ans: a - b
    })
});

app.listen(3000);