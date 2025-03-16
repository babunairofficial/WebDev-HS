const express = require('express');

const { userRouter } = require("./routes/user");
const { courseRouter } = require("./routes/course");
const { adminRouter } = require("./routes/admin");

const app = express(); //create an instance of express http server

const port = 3000;

//5 endpoints - using express router
app.use("/user", userRouter);
app.use("/courses", courseRouter);
app.use("/admin", adminRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});