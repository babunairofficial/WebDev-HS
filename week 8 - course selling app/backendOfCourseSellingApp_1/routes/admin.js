const express = require('express');
const adminRouter = express.Router();
const {adminModel} = require("../db"); 

const jwt = require("jsonwebtoken");

//import jwt admin password from config.js
const {JWT_ADMIN_PASSWORD} = require("../config");



adminRouter.post('/signup', async (req, res) => {
    const { email, password, firstName, lastName } = req.body; //add zod validation
    
    //hash the passowrd

    await adminModel.create({
        email: email,
        password: password,
        firstName: firstName,
        lastName: lastName
    });

    res.json({
        message: "signup endpoint"
    });
});
adminRouter.post('/login', async (req, res) => {
    const { email, password } = req.body;
    
    
    const admin = await adminModel.findOne({ 
        email: email,
        password: password
    });

    
    if (admin) {
        const token = jwt.sign({
            id:admin._id
        }, JWT_ADMIN_PASSWORD);
        
        res.json({
            token: token
        });
    } else {
        res.status(403).json({
            message: "Incorrect credentials"
        });
    }
});
adminRouter.post('/course', (req, res) => {
    res.json({
        message: "create a course endpoint"
    });
});
adminRouter.get('/course/bulk', (req, res) => {
    res.json({
        message: "list all courses endpoint"
    });
});

module.exports = {
    adminRouter
}