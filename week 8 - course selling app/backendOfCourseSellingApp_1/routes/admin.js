const express = require('express');
const adminRouter = express.Router();
const {adminModel} = require("../db"); 

adminRouter.post('/signup', (req, res) => {
    res.json({
        message: "signup endpoint"
    });
});
adminRouter.post('/login', (req, res) => {
    res.json({
        message: "login endpoint"
    });
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