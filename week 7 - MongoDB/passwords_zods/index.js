/**
 * Main application file for a Todo API with authentication
 * This file sets up an Express server with routes for user authentication and todo management
 */

// Import necessary packages
const bcrypt = require("bcrypt");          // For password hashing and comparison
const express = require("express");        // Web framework to handle HTTP requests
const { UserModel, TodoModel } = require("./db");  // Import database models from db.js
const jwt = require("jsonwebtoken");       // For creating and verifying JSON Web Tokens
const mongoose = require("mongoose");      // MongoDB ODM (Object Data Modeling)
const JWT_SECRET = "jamesbond";            // Secret key for JWT signing (should be in .env file in production)

// Connect to MongoDB database
mongoose.connect(""); // TODO: Add your MongoDB connection string here

// Initialize Express application
const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

/**
 * User Signup Route
 * Creates a new user with hashed password
 * 
 * Request body:
 * - username: User's unique identifier
 * - password: User's password (will be hashed)
 * - name: User's display name
 * 
 * Response:
 * - JSON object with success message
 */
app.post("/signup", async function(req, res){
    // Extract user data from request body
    const username = req.body.username;
    const password = req.body.password;
    const name = req.body.name;

    // Hash the password with bcrypt (salt round of 5)
    const hashedPassword = await bcrypt.hash(password, 5);
    console.log(hashedPassword); // Log the hashed password (remove in production)

    // Create new user in the database
    await UserModel.create({
        username: username,
        password: hashedPassword,
        name: name
    });
    
    // Send success response
    res.json({
        message: "You are logged in"
    });
});

/**
 * User Login Route
 * Authenticates user and returns JWT token
 * 
 * Request body:
 * - username: User's unique identifier
 * - password: User's password (plain text)
 * 
 * Response:
 * - JWT token if authentication succeeds
 * - Error message with 403 status if authentication fails
 */
app.post("/login", async function(req, res){
    // Extract credentials from request body
    const username = req.body.username;
    const password = req.body.password;

    // Find user in database by username
    const user = await UserModel.findOne({
        username: username
    });

    // Handle case when user doesn't exist
    if(!user){
        res.status(403).json({
            message: "User not found!"
        })
        return;
    }
    
    // Compare provided password with stored hash
    // First parameter is plain text password, second is hashed password from database
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (passwordMatch) {
        // If password matches, create JWT with user ID in payload
        const token = jwt.sign({
            id: user._id
        }, JWT_SECRET);
        
        // Return token to client
        res.json({
            token: token
        });
    } else {
        // If password doesn't match, return error
        res.status(403).json({
            message: "Incorrect credentials"
        })
    }
});

/**
 * Create Todo Route (Protected)
 * Creates a new todo item for authenticated user
 * Requires authentication via auth middleware
 * 
 * Request body:
 * - title: Title of the todo item
 * - done: Boolean indicating if the todo is completed
 * 
 * Response:
 * - Success message
 */
app.post("/todo", auth, async function(req, res){
    // Get user ID from auth middleware
    const userId = req.userId;
    // Extract todo data from request body
    const title = req.body.title;
    const done = req.body.done;

    // Create new todo in database
    await TodoModel.create({
        title,          // Shorthand property assignment (same as title: title)
        userId,         // Associate todo with authenticated user
        done
    });

    // Send success response
    res.json({
        message: "Todo created"
    });
});

/**
 * Get Todos Route (Protected)
 * Retrieves all todos for authenticated user
 * Requires authentication via auth middleware
 * 
 * Response:
 * - Array of todo objects belonging to the user
 */
app.get("/todos", auth, async function(req, res){
    // Get user ID from auth middleware
    const userId = req.userId;
    
    // Find all todos in database that belong to this user
    const todos = await TodoModel.find({
        userId: userId
    });

    // Return todos as JSON response
    res.json({
        todos
    });
});

/**
 * Authentication Middleware
 * Verifies JWT token and extracts user ID
 * Adds userId to request object for use in protected routes
 */
function auth(req, res, next){
    // Get token from request headers
    const token = req.headers.token;

    // Verify and decode JWT token
    const decodedData = jwt.verify(token, JWT_SECRET);

    if (decodedData) {
        // If token is valid, add user ID to request and proceed
        req.userId = decodedData.id;
        next();
    } else {
        // If token is invalid, return error
        res.status(403).json({
            message: "Incorrect credentials"
        });
    }
}

// Start server on port 3000
app.listen(3000);