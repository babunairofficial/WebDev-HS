//creating an http server
//using express

const express = require("express");

const app =  express();

function sum(n){    //the function to calculate the sum
    let k = 0;
    for(let i = 0; i<=n; i++){
        k = k + i;
    }
    return k;
}

app.get("/", function(req, res){
    const n = req.query.n; //accepting the query value
    const ans = sum(n); //calling the function and returning the value

    res.send("Hi there, your answer is "+ ans);

    // res.send("Hi there");
})

app.listen(3000);