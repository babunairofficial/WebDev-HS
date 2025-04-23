require('dotenv').config();
console.log(process.env.MONGO_URL);
const express = require('express');
const mongoose = require("mongoose");

const { userRouter } = require("./routes/user");
const { courseRouter } = require("./routes/course");
const { adminRouter } = require("./routes/admin");

const app = express(); //create an instance of express http server
app.use(express.json()); //necessary to read through middleware that is passed with a json data.

const port = 3000;

//5 endpoints - using express router
app.use("/user", userRouter);
app.use("/courses", courseRouter);
app.use("/admin", adminRouter);

//wait for database connect before connecting to the backend.
async function main(){
  await mongoose.connect(process.env.MONGO_URL);
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`); 
  });
}

main(); //call the function to check for database connectivity