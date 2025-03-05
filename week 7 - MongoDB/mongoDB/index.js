const express = require("express");
const { UserModel, TodoModel } = require("./db");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const JWT_SECRET = "jamesbond";

mongoose.connect(""); //add your mongodb databse connection url
const app = express();

app.use(express.json());
//routes
app.post("/signup", async function(req, res){
    const username = req.body.username;
    const password = req.body.password;
    const name = req.body.name;

    await UserModel.create({
        username: username,
        password: password,
        name: name
    });
    res.json({
        message: "You are logged in"
    });
});

app.post("/login", async function(req, res){
    const username = req.body.username;
    const password = req.body.password;

    const user = await UserModel.findOne({
        username: username,
        password: password
    });

    if (user) {
        const token = jwt.sign({
            id: user._id
        }, JWT_SECRET);
        res.json({
            token: token
        });
    } else {
        res.status(403).json({
            message: "Incorrect credentials"
        })
    }
});
app.post("/todo", function(req, res){

});

app.get("/todos", function(req, res){

});

app.listen(3000);