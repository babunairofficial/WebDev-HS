// This file demonstrates different ways to filter array elements using loops and the filter method

// Traditional approach using a loop
// Define initial array
const arr = [1, 2, 3, 4, 5];

// Initialize empty array to store filtered values
const newArr = [];

// Loop through array and check each element
// If element is even (divisible by 2), add it to newArr
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        newArr.push(arr[i]);
    }
}
console.log(newArr);  // Display filtered array

// Modern approach using filter method
const input = [12, 23, 34, 45, 56];

// Define filter condition function
// Returns true for even numbers, false for odd numbers
function filterLogic(n) {
    if (n % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

// Use filter with the filterLogic function
// filter creates a new array with elements that pass the test
const evenNumbers = input.filter(filterLogic);
console.log(evenNumbers);

// Example of using filter with an inline function
// This time filtering for odd numbers
const oddNumbers = input.filter(function (n) {
    if (n % 2 !== 0) {
        return true;
    } else {
        return false;
    }
});
console.log(oddNumbers);  // Display odd numbers