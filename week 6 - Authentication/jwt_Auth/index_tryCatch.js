/**--------------
 * try and catch
 * --------------
 */

try {
    // Declare a variable 'a' without initializing it (its value is undefined)
    let a;
    
    // This line attempts to access the 'length' property of undefined
    // Since undefined doesn't have a 'length' property, this will throw a TypeError
    console.log(a.length);
    
    // This line will never execute because the previous line throws an error
    // that will immediately transfer control to the catch block
    console.log("hi there from inside");
} catch(e) {
    // This block executes when an error occurs in the try block
    // The error object is captured in parameter 'e', though it's not used here
    console.log("inside catch statement");
}

// This line will execute after the try-catch block completes
// Since the error was caught and handled, program execution continues normally
console.log("hi there from outside");