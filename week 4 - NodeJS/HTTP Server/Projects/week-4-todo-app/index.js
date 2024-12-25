//copy the express boilerplate form express documentation
const express = require('express')
const app = express() //variable created named app 

//route handlers
app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000) //the port to listen to and run the application