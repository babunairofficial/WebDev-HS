/*
* Counter without setInterval
  Try to code a counter in JavaScript without using setInterval.
*/

//assign a variable 'counter' to value 0.
let counter = 0;

//define updateCounter as an arrow function
const updateCounter = () =>{
    
    //counter value increases each time timeout function is called. 
    counter++;

    //display the counter value on the console.
    console.log(counter);

    //call the setTimeout method again to repeat the process after 1 second. 
    setTimeout(updateCounter,1000);
}

//instead of setInterval, we ll be using setTimeout() method to call updateCounter function after 1 second (1000 milliseconds)
setTimeout(updateCounter,1000);