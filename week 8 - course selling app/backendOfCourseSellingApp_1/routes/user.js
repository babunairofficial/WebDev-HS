const express = require('express');
const userRouter = express.Router();
const { userModel } = require("../db");
const jwt = require("jsonwebtoken");
const JWT_USER_PASSWORD = "dccomicsheroes007"



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
userRouter.post('/login', async (req, res) => {
    const { email, password } = req.body;
    
    //userModel.findOne will give either the user or undefined
    //Whereas, userModel.find will give either the user or an empty array
    //so in the case where user becomes empty array then it would be true in the if condition and the funciton will keep revolving around it. 
    //in the case where the user becomes undefined, the if condition would be false.
    const user = await userModel.findOne({ 
        email: email,
        password: password
    });

    //when passwords are hashed the below logic wont work as the user credentials cannot be found. 
    // To work bcrypt library needs to be used. 
    // As of now password is not hashed.

    if (user) {
        const token = jwt.sign({
            id:user._id
        }, JWT_USER_PASSWORD);
        
        res.json({
            token: token
        });
    } else {
        res.status(403).json({
            message: "Incorrect credentials"
        });
    }
    
});
userRouter.get('/purchases', (req, res) => {
    res.json({
        message: "My purchases endpoint"
    });
});

module.exports = {
    userRouter
}