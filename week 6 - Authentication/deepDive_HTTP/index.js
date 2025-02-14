const express = require("express");

const app = express();
app.use(express.json());

const users =  []; //in memory variable storage

function generateToken(){
    return (Math.random() + 1).toString(36).substring(7);
}

function signupHandler(req, res) {
    const username = req.body.username;
    const password = req.body.password;
    
    users.push({
        username: username,
        password: password
    });

    res.json({
        message: "You are signed up"
    });
    console.log(users);
}

function signinHandler(req, res) {
    const username = req.body.username;
    const password = req.body.password;

    const user = users.find(function(u) {
        if(u.username === username && u.password === password) {
            return true;
        } else {
            return false
        }
    });

    if (user) {
        const token = generateToken();
        user.token = token;
        res.send({
            token
        });
        console.log(users);
    } else {
        res.status(403).send({
            message : "Invalid username or password"
        });
    }
}

app.post("/signup", signupHandler);

app.post("/signin", signinHandler);

app.listen(3000);