/* ------ JWT ------ */
/* replace the tokens with JWT */

const express = require("express");
const jwt = require("jsonwebtoken");

//Secret key used for signing and verifying JWTs
//In production, this should be stored securely in environment variables
const JWT_SECRET = "iambatman";

//create an express application instance
const app = express();

//json parsing middleware
app.use(express.json());

//initialize an empty array to store user data (alternative to database for now)
const users =  []; //in memory variable storage

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
        // generate JWT containing user information 
        //jwt.sign() creates a token with:
            //1. payload (user data to encode)
            //2. Secret key (fpr sogmatire)
            //3. Optional options (expiry, algorithm, etc. )

        const token = jwt.sign({ //sign the specific username
            //what needs to be encrypt
            username: username 
        }, JWT_SECRET); //convert the username to a token using my JWT 
        
        //no need to store in the database as the token has all the information encoded inside now
        //Return JWT to client
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
    const token = req.headers.token; // now a jwt

    //verify and decode JWT
    //jwt.verfy() checks if:
        //1. Token was signed with secret key
        //2. Token hasn't expired
        //3. Token hasnnt been tampered with

    const decodedInformation = jwt.verify(token, JWT_SECRET);

    const username = decodedInformation.username;

    // find() method is used to return the value of the first element that passes the test
    const user = users.find(user => user.username === username); // 
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