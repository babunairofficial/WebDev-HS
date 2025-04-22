const jwt = require("jsonwebtoken");

//import jwt admin password from config.js
const {JWT_ADMIN_PASSWORD} = require("../config");

function adminMiddleware(req, res, next) {
    const token = req.headers.token;
    const decoded = jwt.verify(token,JWT_ADMIN_PASSWORD);

    
    if(decoded) { //in the case, decoded is true 
        req.adminId = decoded.id;
        next()
    } else { //in the case, decoded is false
        res.status(403).json({
            message:"You are not signed in"
        })
    }
}

module.exports = {
    adminMiddleware: adminMiddleware
}