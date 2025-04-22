const jwt = require("jsonwebtoken");

//import jwt user password from config.js
const {JWT_USER_PASSWORD} = require("../config");

function userMiddleware(req, res, next) {
    const token = req.headers.token;
    const decoded = jwt.verify(token,JWT_USER_PASSWORD);

    
    if(decoded) { //in the case, decoded is true 
        req.userId = decoded.id;
        next()
    } else { //in the case, decoded is false
        res.status(403).json({
            message:"You are not signed in"
        })
    }
}

module.exports = {
    userMiddleware: userMiddleware
}