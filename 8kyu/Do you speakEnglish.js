/**
 * https://www.codewars.com/kata/58dbdccee5ee8fa2f9000058/train/javascript
 * Given a string of arbitrary length with any ascii characters. Write a function to determine whether the string contains
 *  the whole word "English".

The order of characters is important -- a string "abcEnglishdef" is correct but "abcnEglishsef" is not correct.

Upper or lower case letter does not matter -- "eNglisH" is also correct.

Return value as boolean values, true for the string to contains "English", false for it does not.
 */


// Entry data
const str1 = "english";
const str2 = "enlish";


// Solution 1
const spEng = sentence => sentence.toLowerCase().includes("english");


// Examples
console.log(spEng(str1));
console.log(spEng(str2));