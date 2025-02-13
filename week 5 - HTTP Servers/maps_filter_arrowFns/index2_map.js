// This file demonstrates different ways to transform array elements using traditional loops and the map method

// Traditional approach using a loop
// Define an array of numbers 1 through 5
const arr = [1, 2, 3, 4, 5];
console.log(arr);  // Display original array
var newArr = [];   // Initialize empty array to store results

// Helper function that multiplies a number by 2
function doubleArr(a) {
    return a * 2;
}

// Traditional for loop to iterate through array
// For each element, call doubleArr function and push result to newArr
for (let i = 0; i < arr.length; i++) {
    newArr.push(doubleArr(arr[i]))
}
console.log(newArr);  // Display transformed array

// Modern approach using map method
// Define a new input array with different numbers
const input = [1, 5, 10, 15, 20, 25];

// Define transformation function
function transform(i) {
    return i * 2;
}

// Use map to apply transform function to each element
// map creates a new array with the results
const ans = input.map(transform);
console.log(ans);

// Example of using map with an anonymous function
// Define array of odd numbers
const oddNumbers = [1, 3, 5, 7, 9];

// Use map directly with an inline function
// This multiplies each number by 10
const multipleOfOdds = oddNumbers.map(function (n) {
    return n * 10;
});
console.log(multipleOfOdds);  // Display results