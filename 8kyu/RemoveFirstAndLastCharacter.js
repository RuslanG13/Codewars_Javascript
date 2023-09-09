/**
 * https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0/train/javascript
 * It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string.
 * You're given one parameter, the original string. You don't have to worry with strings with less than two characters.
 */


// Entry data
const str1 = "eloquent";
const str2 = "country";


// Solution 1
function removeChar(str) {
    return str.slice(1, -1);
}


// Solution 2
function removeChar2(str) {
    let res = "";

    for (let i = 1; i < str.length - 1; i++) {
        res += str[i];
    }

    return res;
}


// Examples
console.log(removeChar(str1));
console.log(removeChar(str2));

console.log(removeChar2(str1));
console.log(removeChar2(str2));




