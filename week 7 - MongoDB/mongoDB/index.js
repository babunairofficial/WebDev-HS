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
app.post("/todo", auth, async function(req, res){
    const userId = req.userId;
    const title = req.body.title;
    const done = req.body.done;

    await TodoModel.create({
        title,
        userId,
        done
    });

    res.json({
        message: "Todo created"
    });
});

app.get("/todos", auth, async function(req, res){
    const userId = req.userId;
    const todos = await TodoModel.find({
        userId: userId
    });

    res.json({
        todos
    });
});

//authentication middleware
function auth(req, res, next){
    const token = req.headers.token;

    const decodedData = jwt.verify(token, JWT_SECRET);

    if (decodedData) {
        req.userId = decodedData.id;
        next();
    } else {
        res.status(403).json({
            message: "Incorrect credentials"
        });
    }
}

app.listen(3000);