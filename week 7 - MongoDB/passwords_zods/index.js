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
const { z } = require("zod");

// Connect to MongoDB database
mongoose.connect("");

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
 * - JSON object with success message or error message
 */
app.post("/signup", async function(req, res){
    const requiredBody = z.object({
        username: z.string().min(3).max(100).email(),
        name: z.string().min(3).max(100),
        password: z.string().min(3).max(30)
    });

    const parsedDataWithSuccess = requiredBody.safeParse(req.body); 
    //safeParse also returns the list of errors in the input

    if (!parsedDataWithSuccess.success) {
        res.json({
            message: "Incorrect format",
            error: parsedDataWithSuccess.error
       });
        return
    }

    // Use the validated data from Zod (this is important!)
    const { username, password, name } = parsedDataWithSuccess.data;

    try {
        // Check if user already exists
        const existingUser = await UserModel.findOne({ username: username });
        if (existingUser) {
            // If user exists, return error response
            return res.status(400).json({
                message: "User already exists"
            });
        }

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
        return res.json({
            message: "You are signed up successfully"
        });
    } catch(error) {
        
        // Send error response
        return res.status(500).json({
            message: "An error occurred during signup"
        });
    }
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

    try {
        // Find user in database by username
        const user = await UserModel.findOne({
            username: username
        });

        // Handle case when user doesn't exist
        if(!user){
            return res.status(403).json({
                message: "User not found!"
            });
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
            return res.json({
                token: token
            });
        } else {
            // If password doesn't match, return error
            return res.status(403).json({
                message: "Incorrect credentials"
            });
        }
    } catch (error) {       
        
        // Send error response
        return res.status(500).json({
            message: "An error occurred during login"
        });
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
    try {
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
        return res.json({
            message: "Todo created"
        });
    } catch (error) {        
        return res.status(500).json({
            message: "An error occurred while creating todo"
        });
    }
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
    try {
        // Get user ID from auth middleware
        const userId = req.userId;
        
        // Find all todos in database that belong to this user
        const todos = await TodoModel.find({
            userId: userId
        });

        // Return todos as JSON response
        return res.json({
            todos
        });
    } catch (error) {        
        return res.status(500).json({
            message: "An error occurred while fetching todos"
        });
    }
});

/**
 * Authentication Middleware
 * Verifies JWT token and extracts user ID
 * Adds userId to request object for use in protected routes
 */
function auth(req, res, next){
    try {
        // Get token from request headers
        const token = req.headers.token;
        
        if (!token) {
            return res.status(401).json({
                message: "Authentication token is missing"
            });
        }

        // Verify and decode JWT token
        const decodedData = jwt.verify(token, JWT_SECRET);

        if (decodedData) {
            // If token is valid, add user ID to request and proceed
            req.userId = decodedData.id;
            next();
        } else {
            // If token is invalid, return error
            return res.status(403).json({
                message: "Invalid authentication token"
            });
        }
    } catch (error) {
        console.error("Authentication error:", error);
        return res.status(401).json({
            message: "Authentication failed"
        });
    }
}

// Start server on port 3000
app.listen(3000, () => {
    console.log("Server started on port 3000");
});