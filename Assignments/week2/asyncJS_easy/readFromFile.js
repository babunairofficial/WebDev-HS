/*
Write code to read contents of a file and print it to the console. 
You can use the fs library to as a black box, the goal is to understand async tasks. 
Try to do an expensive operation below the file read and see how it affects the output. 
Make the expensive operation more and more expensive and see how it affects the output. 
*/

//requiring fs module 
const fs = require('fs');

//call for readfile function in fs module
//file to read is 'a.txt', encoding 'utf8'.
//asynchronous file reading operation
fs.readFile('a.txt','utf8', (err, data) =>{
    //error handling: throw the error instead of logging it
    if(err){
        throw err;
    }    
    console.log('file contents are : ', data);
});

// Function to check if a number is prime
function isPrime(num) {
    for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return num > 1;
  }

// Expensive operation: Find the nth prime number
const expensiveOperation = () => {
    const n = 100000; // Finding the 100,000th prime number
    let count = 0;
    let num = 2;
    while (count < n) {
      if (isPrime(num)) {
        count++;
      }
      if (count === n) {
        console.log(`The ${n}th prime number is ${num}`);
        break;
      }
      num++;
    }
    console.log('Expensive operation done');
  };
  
  //execute the expensive operation
  expensiveOperation();

//The expensive operation starts immediately after the file read is initiated.