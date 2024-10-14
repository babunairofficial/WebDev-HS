/* Create a counter in JavaScript
 * counter should go up as time goes by in intervals of 1 second.
*/

//assigning a variable counter to start time of 0
let counter = 0;

//define a function "updateCounter" using arrow function
const updateCounter = () => {
    //increase counter value by 1. 
    counter++;
    //display the current value of counter 
    console.log(counter);
};

//call for setInterval method to call a function every 1 second. 
setInterval(updateCounter, 1000); 

