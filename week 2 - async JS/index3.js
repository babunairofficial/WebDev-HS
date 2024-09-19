// Promises

function random(resolve){ // resolve is also a function
    //resolve();
    setTimeout(resolve,3000);
}

let p = new Promise(random); // supposed to return u something eventually
// console.log(p);

//using the eventual value returned by the promise

function callback(){
    console.log("promise succeeded");
}
p.then(callback);