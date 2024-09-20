const fs = require("fs");

function readTheFile(finalValue){
    fs.readFile("d.txt", "utf-8",function(err,data){
        finalValue(data);
    })
}

function readFile(){
    return new Promise(readTheFile);
}

function callback(contents){
    console.log(contents);
}
readFile().then(callback);


