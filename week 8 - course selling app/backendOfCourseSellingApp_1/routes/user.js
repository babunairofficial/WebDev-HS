const express = require('express');
const userRouter = express.Router();

userRouter.post('/signup', (req, res) => {
    res.json({
        message: "signup endpoint"
    });
});
userRouter.post('/login', (req, res) => {
    res.json({
        message: "login endpoint"
    });
});
userRouter.get('/purchases', (req, res) => {
    res.json({
        message: "My purchases endpoint"
    });
});

module.exports = {
    userRouter
}