const express = require('express');
const courseRouter = express.Router();
const { userMiddleware } = require("../middleware/user");
const { purchaseModel, courseModel } = require("../db");

courseRouter.get('/preview', async (req, res) => {

    const courses = await courseModel.find({});

    res.json({
        courses
    });
});
courseRouter.post('/purchase', userMiddleware, async (req, res) => {
    const userId = req.userId;
    const courseId = req.body.courseId;

    await purchaseModel.create({
        userId,
        courseId
    })

    res.json({
        message: "You have successfully bought the course"
    });
});

module.exports = {
    courseRouter
}