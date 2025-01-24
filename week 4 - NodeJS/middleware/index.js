//fantasy land ride app

const express = require('express');

const app = express();

function isOldEnoughMiddleware(req, res, next){
    const age = req.query.age; //taking the value of the age request
    if (age >= 14){
        next();
    } else{
        res.json({
            msg: "Sorry you are not of age yet"
        });
    }
}
app.get("/ride2", isOldEnoughMiddleware, function(req, res){
    res.json({
        msg: "You have successfully riden the ride 2"
    });     
})
app.get("/ride1", isOldEnoughMiddleware, function(req, res){
    res.json({
        msg: "You have successfully riden the ride 1"
    });     
});

app.listen(3000);