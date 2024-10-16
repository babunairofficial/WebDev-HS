/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

// This function creates a delay using busy-waiting
// It takes the number of milliseconds to wait as an argument
function sleep(milliseconds) {

    // Return a new Promise
    // This allows us to use the function with async/await or .then()
    return new Promise(resolve => {
        
      // Get the current timestamp in milliseconds
      const start = Date.now();
      
      // Enter a loop that continues until enough time has passed
      while (Date.now() - start < milliseconds) {
        // This empty loop is intentional
        // It keeps the CPU busy, effectively blocking the thread
        // This is called "busy-waiting"
      }
      
      // Once the loop is done, resolve the Promise
      // This signals that the sleep is complete
      resolve();
    });
  }
  
  // Export the sleep function so it can be used in other files
  module.exports = sleep;