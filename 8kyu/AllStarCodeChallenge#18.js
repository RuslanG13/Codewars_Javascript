/**
 * https://www.codewars.com/kata/5865918c6b569962950002a1/train/javascript
 * Create a function that accepts a string and a single character, and returns an integer of the count of occurrences 
 * the 2nd argument is found in the first one.

If no occurrences can be found, a count of 0 should be returned.

("Hello", "o")  ==>  1
("Hello", "l")  ==>  2
("", "z")       ==>  0
str_count("Hello", 'o'); // returns 1
str_count("Hello", 'l'); // returns 2
str_count("", 'z'); // returns 0
Notes
The first argument can be an empty string
In languages with no distinct character data type, the second argument will be a string of length 1
 */


// Entry data
const str1 = "Hello";
const str2 = "";

const char1 = "o";
const char2 = "l";
const char3 = "z";


// Solution 1
const strCount = (str, letter) => str.split('').filter(el => el == letter).length;

// Solution 2
const strCount2 = (str, letter) => {
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] == letter) {
            count++;
        }
    }

    return count;
}


// Examples
console.log(strCount(str1, char1));
console.log(strCount(str1, char2));
console.log(strCount(str2, char3));
console.log("--------------------")
console.log(strCount2(str1, char1));
console.log(strCount2(str1, char2));
console.log(strCount2(str2, char3));  