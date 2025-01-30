//copy the express boilerplate form express documentation
const express = require('express')
const app = express() //variable created named app 

let todos = [];

//route handlers
app.post('/', function(req, res){
  //create a random id for the todo
  //extract the todo title from the body
  todos.push({
    title,
    id
  })
})

app.delete('/', function(req, res){

})

app.get('/', function(req, res){
  res.json({
    to
  })
})

/*
app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/asd', function (req, res) {
    res.send('Entered ASD. Good work!')
  })
*/

app.listen(3000) //the port to listen to and run the application