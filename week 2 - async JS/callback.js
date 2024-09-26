function setTimeoutPromisified(duration){
    return new Promise(function(resolve){
        setTimeout(resolve, duration)
    });
}
function oneSec(){
    console.log("Hi");
    setTimeoutPromisified(3000).then(threeSec);
}
function threeSec(){
    console.log("Hello");
    setTimeoutPromisified(5000).then(fiveSec);
}
function fiveSec(){
    console.log("Hello there");
}
setTimeoutPromisified(1000).then(oneSec);