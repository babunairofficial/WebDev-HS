const express = require("express");
const app = express();

const users = [{
    name: "John",
    kidneys: [{
        healthy: false
    }]
}]; //acts as a mini-database, where data is stored

app.use(express.json()); // to parse json for now

app.get("/", function(req,res){
    const johnKidneys = users[0].kidneys;
    const numberOfKidneys = johnKidneys.length;
    let numberOfHealthyKidneys = 0;
    for(let i = 0; i<johnKidneys.length; i++){
        if(johnKidneys[i].healthy){
            numberOfHealthyKidneys = numberOfHealthyKidneys + 1;
        }
    }
    const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;
    res.json({
        numberOfKidneys,
        numberOfHealthyKidneys,
        numberOfUnhealthyKidneys
    })
})

//post - sending a statement in the body
app.post("/", function(req, res){
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy
    })
    res.json({
        msg: "Done!"
    })
})

app.put("/", function(req, res){
    for(let i = 0; i<users[0].kidneys.length; i++){
        users[0].kidneys[i].healthy = true;
    }
    res.json({ //incase json data is not sent the process is hung
        msg: "update complete." //this field can be left blank
    })
})

//removing unhealthy kidneys
app.delete("/", function(req, res){
    const newKidneys = [];
    for(let i =0; i<users[0].kidneys.length; i++){
        if(users[0].kidneys[i].healthy){
            newKidneys.push({
                healthy: true
            })
        }
    }
    users[0].kidneys = newKidneys;
    res.json({
        msg: "deleted"
    })
})

app.listen(3000);