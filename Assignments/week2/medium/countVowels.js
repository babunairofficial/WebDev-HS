/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {


    let vowels = str.match(/[aeiou]/gi); //global search, case insensitive
    return vowels === null ? 0 : vowels.length;
}

console.log(countVowels("apple"));

module.exports = countVowels;