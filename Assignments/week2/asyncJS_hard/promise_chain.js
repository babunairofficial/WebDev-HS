/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from promise-all.js, done previously
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

// Function to calculate the total time taken for all promises to resolve sequentially
function calculateTime(t1, t2, t3) {
    const startTime = Date.now(); // Record the start time

    // Chain the promises sequentially
    return wait1(t1)
        .then(() => wait2(t2))
        .then(() => wait3(t3))
        .then(() => {
            const endTime = Date.now(); // Record the end time
            return endTime - startTime; // Return the time difference in milliseconds
        });
}

module.exports = calculateTime;