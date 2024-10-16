/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {

    // Return a new Promise object
    return new Promise(resolve => {
      
        // Use setTimeout to delay the resolution of the Promise
      // n * 1000 converts seconds to milliseconds
      // resolve is passed directly as the callback to setTimeout
      setTimeout(resolve, n * 1000);
      
    });
  }
  
  // Export the wait function so it can be used in other modules
  module.exports = wait;