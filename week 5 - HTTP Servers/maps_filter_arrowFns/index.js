// ==========================================
// JavaScript Map, Filter, and Arrow Functions Demo
// ==========================================

// Basic Function Declarations and Arrow Functions
// --------------------------------------------
// This is a traditional function declaration using the 'function' keyword
// The function is named 'sum' and takes two parameters: 'a' and 'b'
// Parameters act as placeholders for values that will be passed when calling the function
function sum(a, b) {
    // The return statement specifies what value the function should output
    // Here, it returns the sum of parameters 'a' and 'b' using the '+' operator
    return a + b;
}

// Here we call/invoke the sum function with arguments 1 and 2
// The returned value (1 + 2 = 3) is stored in the constant variable 'ans'
// We use 'const' to declare a variable that won't be reassigned
const ans = sum(1, 2);

// console.log() is a built-in JavaScript method that prints values to the console
// This will display the value stored in 'ans' (which is 3) in the console
console.log(ans);


// This is a modern ES6+ arrow function declaration
// Arrow functions provide a more concise syntax for writing function expressions
// The function is stored in a constant variable named 'multiply'
// Like the sum function, it takes two parameters: 'a' and 'b'
const multiply = (a, b) => {
    // Note: There appears to be a logical error here
    // The function is named 'multiply' but performs addition instead of multiplication
    // To fix this, it should be: return a * b;
    return a + b;
}

// Call the multiply function with arguments 2 and 5
// The result (2 + 5 = 7) is stored in the constant variable 'prod'
// Note: If this was actually multiplication, the result would be 10 (2 * 5)
const prod = multiply(2, 5);

// Print the value stored in 'prod' (7) to the console
console.log(prod);