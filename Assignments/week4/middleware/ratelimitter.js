/*
You have to create a middleware for rate limiting a users request based on their username passed in the header

You have been given an express server which has a few endpoints.

    Your task is to create a global middleware (app.use) which will rate limit the requests from a user to only 5 request per second
    - If a user sends more than 5 requests in a single second, the server should block them with a 404.
    - User will be sending in their user id in the header as 'user-id'
    - You have been given a numberOfRequestsForUser object to start off with which clears every one second
*/

const express = require("express");

const app = express();

let numberOfRequestsForUser = {};
setInterval(() =>{
    numberOfRequestsForUser = {}
}, 1000); //clears off every one second

//global middle ware
app.use(function(req, res, next){
   const userId = req.headers["user-id"];
   
   if(numberOfRequestsForUser[userId]){
    numberOfRequestsForUser[userId]++; //counter increment for the number of requests per second
    if(numberOfRequestsForUser[userId] > 5){ //check for requests per second 
        res.status(404).send("no entry"); //when the requests per second is more than 5
    } else{
        //continue with the request when below the limit of 5 requests per second
        next();
    }
   } else{
    //when the function starts the value of numberOfRequestsForUser is not initialised, 
    // hence to continue with the request we need to assign it to 1
    numberOfRequestsForUser[userId] = 1;
    next();
   }
})

app.get("/user", function(req, res){
    res.status(200).json({name: "Sachin"});
});

app.post("/user", function(req, res){
    res.status(200).json({msg:"dummy user"});
});

app.listen(3000);