const express = require('express');
const userRouter = express.Router();
const { userModel } = require("../db");



userRouter.post('/signup', async (req, res) => {
    const { email, password, firstName, lastName } = req.body; //add zod validation
    
    //hash the passowrd

    try{
        await userModel.create({
            email: email,
            password: password,
            firstName: firstName,
            lastName: lastName
        });
    }
    catch(e) {
        message: "signup failed"
    }
    


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