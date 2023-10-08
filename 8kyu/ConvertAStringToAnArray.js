/**
 * https://www.codewars.com/kata/57e76bc428d6fbc2d500036d/train/javascript
 * "Robin Singh" ==> ["Robin", "Singh"]
 *
 * "I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]
 */


// Entry data
const str1 = "Robin Singh";
const str2 = "I love arrays they are my favorite";


// Solution 1
const stringToArray = string => string.split(" ");


// Solution
console.log(stringToArray(str1));
console.log(stringToArray(str2));