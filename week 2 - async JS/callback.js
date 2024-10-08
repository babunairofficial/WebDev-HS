function setTimeoutPromisified(duration){
    return new Promise(function(resolve){
        setTimeout(resolve, duration)
    });
}
// function oneSec(){
//     console.log("Hi");
//     setTimeoutPromisified(3000).then(threeSec);
// }
// function threeSec(){
//     console.log("Hello");
//     setTimeoutPromisified(5000).then(fiveSec);
// }
// function fiveSec(){
//     console.log("Hello there");
// }
// setTimeoutPromisified(1000).then(oneSec);

//promisified callback or promise chaining
/*
setTimeoutPromisified(1000).then(function(){
    console.log("hi");
    return setTimeoutPromisified(3000);
}).then(function(){
    console.log("Hello");
    return setTimeoutPromisified(5000);
}).then(function(){
    console.log("Hello there");
});
*/

//async await syntax
async function solve(){
    await setTimeoutPromisified(1000);
    console.log("hi");
    await setTimeoutPromisified(3000);
    console.log("hello");
    await setTimeoutPromisified(5000);
    console.log("hello there");
}
solve();

const fs = require("fs");
function readFilePromisified(filePath) {
    return new Promise(function (resolve, reject) {
      fs.readFile(filePath, "utf-8", function (err, data) {
        if (err) {
          reject("Error while reading file");
        } else {
          resolve(data);
        }
      });
    });
  }
  
  function onDone(data) {
    console.log(data);
  }
  
  function onError(err) {
    console.log("Error: " + err);
  }
  
  readFilePromisified("a.txt").then(onDone).catch(onError);