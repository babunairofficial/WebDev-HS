const express = require('express');
const courseRouter = express.Router();

courseRouter.get('/preview', (req, res) => {
    res.json({
        message: "view courses endpoint"
    });
});
courseRouter.post('/purchase', (req, res) => {
    res.json({
        message: "Purchase course endpoint"
    });
});

module.exports = {
    courseRouter
}