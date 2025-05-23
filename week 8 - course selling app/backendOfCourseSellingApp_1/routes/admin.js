const express = require('express');
const adminRouter = express.Router();
const {adminModel, courseModel} = require("../db"); 

const jwt = require("jsonwebtoken");

//import jwt admin password from config.js
const {JWT_ADMIN_PASSWORD} = require("../config");
const { adminMiddleware } = require('../middleware/admin');



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
adminRouter.post('/course', adminMiddleware, async (req, res) => {
    //get the adminId
    const adminId = req.adminId;

    //elements required in course creation
    const {title, description, imageUrl, price} = req.body;

    const course = await courseModel.create({
        //check for the courseSchema in db.js 
        title, description, imageUrl, price, creatorId: adminId
    })

    res.json({
        message: "Course created",
        courseId: course._id
    });
});
adminRouter.put('/course', adminMiddleware, async (req, res) => {
    //get the adminId
    const adminId = req.adminId;

    //elements required in course updation
    const {title, description, imageUrl, price, courseId} = req.body;

    const course = await courseModel.updateOne({
        _id: courseId,
        creatorId: adminId
    }, {
        //check for the courseSchema in db.js 
        title, description, imageUrl, price
    })

    res.json({
        message: "Course updated",
        courseId: course._id
    });
});
adminRouter.get('/course/bulk', adminMiddleware, async (req, res) => {
    const adminId = req.adminId;

    const courses = await courseModel.find({
        creatorId: adminId
    });

    res.json({
        message: "list all courses endpoint",
        courses
    });
});

module.exports = {
    adminRouter
}