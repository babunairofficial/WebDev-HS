/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
    
    function sortString(str){
        return str.toLowerCase().split("").sort().join("");
    }

    if(str1.length!=str2.length){
        return false;
    }else{
        return sortString(str1) == sortString(str2);
    }

}
let output = isAnagram("Sad","Das");
console.log(output);

module.exports = isAnagram;
