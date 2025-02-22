/**-----------------------------
 * Assignment - Auth Middleware
 * -----------------------------
 * create a middleware called auth that verified if a user is logged in and ends the request early if the user isn't logged in 
 */


//install external packages - express and jsonwebtoken

//import the packages
 const express = require("express");
 const jwt = require("jsonwebtoken");

 //create a secret to use JWT
 const JWT_SECRET = "babu005";

//initialise an instance of express application 
const app = express();

//global array
const users = [];

//extract element from body, when req.body is used
app.use(express.json());

//middleware - check if a user is logged in
function auth(req, res, next) {
    const token = req.headers.token;

    if(!token) {
        return res.status(401).json({
            message: "No users logged in"
        });
    }

    jwt.verify(token, JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).json({
                message: "Invalid token"
            });
        }
        
        req.user = decoded;
        next();
    });

}
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
    
    const username = req.user.username;

    let foundUser = null;
    for (let i = 0; i < users.length; i++) {
        if (users[i].username === username) {
            foundUser = users[i];
            break;
        }
    }
    
    if(!foundUser) {
        return res.status(404).json({
            message: "User not found"
        });
    }

    res.json({
        username: foundUser.username,
        password: foundUser.password
    });
}
//introduce 3 endpoint  - signup, signin, me
app.post("/signup", signUpHandler);
app.post("/signin", signInHandler);
app.get("/me", auth, meHandler);

//start server on port 
app.listen(3000);