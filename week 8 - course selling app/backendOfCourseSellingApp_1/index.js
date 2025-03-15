const express = require('express');
const app = express(); //create an instance of express http server
const port = 3000;

//5 endpoints
app.post('/user/signup', (req, res) => {
    res.json({
        message: "signup endpoint"
    });
});
app.post('/user/login', (req, res) => {
    res.json({
        message: "login endpoint"
    });
});
app.get('/courses', (req, res) => {
    res.json({
        message: "view courses endpoint"
    });
});
app.post('/course/purchase', (req, res) => {
    res.json({
        message: "Purchase course endpoint"
    });
});
app.get('/user/purchases', (req, res) => {
    res.json({
        message: "My purchases endpoint"
    });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});