//Import the Express framework
const express = require("express");

//create an express application instance
const app = express();

//json parsing middleware
app.use(express.json());

//initialize an empty array to store user data (alternative to database for now)
const users =  []; //in memory variable storage

//function to return a random string
function generateToken(){
    return (Math.random() + 1).toString(36).substring(7);
}

//user registration handler
function signupHandler(req, res) {
    //extract username and pasword from request body
    const username = req.body.username;
    const password = req.body.password;

    //add new user to the array
    //currently, passwords are saved in plain text - not recommended for production
    users.push({
        username: username,
        password: password
    });

    //send success response back to client
    res.json({
        message: "You are signed up"
    });

    //log current users array
    console.log(users);
}

//user login handler
function signinHandler(req, res) {
    //Extract username and password from request body
    const username = req.body.username;
    const password = req.body.password;

    //Search for user in users array matching credentials
    const user = users.find(function(u) {
        if(u.username === username && u.password === password) {
            return true;
        } else {
            return false
        }
    });

    //If user is found, generate and return authentication token
    if (user) {
        const token = generateToken();
        //Add token to user object
        user.token = token;
        
        res.send({ //send token in response
            token
        });
        console.log(users); //log updated users array
    } else { //uf credentials are invalid, send 403 forbidden status
        res.status(403).send({
            message : "Invalid username or password"
        });
    }
}

//handler funtion to retrieve authenticated ser's information
//this endpoint requires a valid token in the request header
//Headers are key-value pairs in the HTTP request metadata
function meHandler(req, res) {
    //Extract the authentication token form request headers
    const token = req.headers.token;

    // find() method is used to return the value of the first element that passes the test
    const user = users.find(user => user.token === token); //returns the full information of the user as per the token, 
    // if token not found then undefined is returned

    //log user object
    console.log(user);

    //check for the valid user
    if (user) {
        res.send({
            username: user.username //return user's username
        });
    } else { //incase user is undefined
        res.status(401).send({
            message: "Unauthorised" 
        });
    }
}

//route for user registration
app.post("/signup", signupHandler);

//route for user login
app.post("/signin", signinHandler);

//route for me endpoint
app.get("/me", meHandler);

//start server on port
app.listen(3000);