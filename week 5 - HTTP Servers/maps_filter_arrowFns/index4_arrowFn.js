// This file demonstrates the use of traditional functions vs arrow functions with array methods

// Define array of cricket player names
const arr = ["sachin", "virender", "sourav", "rahul", "yuvraj"];

// Traditional function approach
// Filter names that start with 's'
const ans = arr.filter(function (n) {
    if (n.startsWith("s")) {
        return true;
    } else {
        return false;
    }
});
console.log(ans);  // Display names starting with 's'

// Modern approach using arrow function
// Filter names that start with 'r'
// Arrow function provides more concise syntax while maintaining the same functionality
const ans2 = arr.filter((n) => {
    if (n.startsWith("r")) {
        return true;
    } else {
        return false;
    }
});
console.log(ans2);  // Display names starting with 'r'

// Note: These functions could be written even more concisely as:
// const ans = arr.filter(n => n.startsWith("s"));
// const ans2 = arr.filter(n => n.startsWith("r"));