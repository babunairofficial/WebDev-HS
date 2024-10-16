/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */

// Function that returns a promise resolving after t seconds
function wait1(t) {
    return new Promise(resolve => setTimeout(resolve, t * 1000));
}

// Function that returns a promise resolving after t seconds
function wait2(t) {
    return new Promise(resolve => setTimeout(resolve, t * 1000));
}

// Function that returns a promise resolving after t seconds
function wait3(t) {
    return new Promise(resolve => setTimeout(resolve, t * 1000));
}

// Function to calculate the total time taken for all promises to resolve
function calculateTime(t1, t2, t3) {
    const startTime = Date.now(); // Record the start time

    // Create an array of promises using the wait functions
    const promises = [wait1(t1), wait2(t2), wait3(t3)];

    // Use Promise.all to wait for all promises to resolve
    return Promise.all(promises).then(() => {
        const endTime = Date.now(); // Record the end time
        return endTime - startTime; // Return the time difference in milliseconds
    });
}

module.exports = calculateTime;