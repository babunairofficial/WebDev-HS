//install external packages - express and jsonwebtoken

//import the packages
 const express = require("express");
 const jwt = require("jsonwebtoken");

 //create a secret to use JWT
 const JWT_SECRET = "babu005";

//initialise an instance of express application 
const app = express();

//gloabl array
const users = [];

//extract element from body, when req.body is used
app.use(express.json());

//create handler functions for signup, signin, me
function signUpHandler(req,res) {
    const username = req.body.username;
    const password = req.body.password;
    //push these to global array previously created
    users.push({
        username: username,
        password: password
    });

    //ideally check if a user with this username already exists. 

    //return to the user
    res.json({
        message: "You are signed in"
    });
}

function signInHandler(req,res) {
    const username = req.body.username;
    const password = req.body.password;

    //check if there is a user in the global users array which has the username mentioned.
    let foundUser = null;
    for (let i = 0; i < users.length; i++) {
        if (users[i].username === username && users[i].password === password) {
            foundUser = users[i];
        }
    }
    if (!foundUser) {
        res.json({
            message: "Check your credentials!"
        })
        return
    } else {
        //create a token
        const token = jwt.sign({username}, JWT_SECRET);
        res.json({
            token: token
        });

    }
}

function meHandler(req,res) {
    //needed for anyone who wants to hit authenticated end point 
    const token = req.headers.token;

    const decodedData = jwt.verify(token, JWT_SECRET);

    if(decodedData.username) {
        let foundUser = null;

        for (let i = 0; i < users.length; i++) {
            if (users[i].username === decodedData.username) {
                foundUser = users[i]
            }
        }
        res.json({
            username: foundUser.username,
            password: foundUser.password
        })
    }
}
//introduce 3 endpoint  - signup, signin, me
app.post("/signup", signUpHandler);
app.post("/signin", signInHandler);
app.get("/me", meHandler);

//start server on port 
app.listen(3000);