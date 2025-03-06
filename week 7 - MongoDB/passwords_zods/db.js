/**
 * Database Models File
 * Defines Mongoose schemas and models for the application's data
 */

// Import Mongoose for MongoDB object modeling
const mongoose = require("mongoose");

// Get Schema constructor from mongoose
const Schema = mongoose.Schema;
// Get ObjectId type for referencing between models
const ObjectId = Schema.ObjectId;

/**
 * User Schema
 * Defines the structure for user documents in the database
 * 
 * Fields:
 * - name: User's display name
 * - username: User's unique identifier for login
 * - password: User's hashed password
 */
const User = new Schema({
  name: String,
  username: String,
  password: String
});

/**
 * Todo Schema
 * Defines the structure for todo documents in the database
 * 
 * Fields:
 * - userId: Reference to the user who owns this todo (using MongoDB ObjectId)
 * - title: Text description of the todo item
 * - done: Boolean flag indicating completion status
 */
const Todo = new Schema({
    userId: ObjectId,    // References a user's _id field
    title: String,
    done: Boolean
});

/**
 * Create Mongoose models from schemas
 * Mongoose models provide an interface to the database for creating,
 * querying, updating, and deleting documents
 * 
 * First parameter is the collection name (MongoDB will pluralize if needed)
 * Second parameter is the schema definition
 */
const UserModel = mongoose.model('users', User);
const TodoModel = mongoose.model('todos', Todo);

/**
 * Export models for use in other files
 * Using object shorthand notation (equivalent to { UserModel: UserModel, TodoModel: TodoModel })
 */
module.exports = {
    UserModel,
    TodoModel
}