/**
 * https://www.codewars.com/kata/5728203b7fc662a4c4000ef3/train/javascript
 * Task
 * Coding in function alienLanguage, function accept 1 parameter:str. str is a sentence.
 *
 * We translate the sentence into an alien language according to the following rules:
 *
 * Each word in the sentence is separated by spaces. The last letter of each word in the sentence turns to lowercase,
 * and the other letters are capitalized. Looks very strange? Because this is the form of alien language ;-)
 *
 * for example:
 *
 * alienLanguage("My name is John") should return "My NAMe Is JOHn"
 * alienLanguage("this is an example") should return "THIs Is An EXAMPLe"
 * alienLanguage("Hello World") should return "HELLo WORLd"
 */


// Entry data
const str1 = "My name is John";
const str2 = "this is an example";


// Solution 1
function alienLanguage(str) {
    return str.toUpperCase().split(" ").map(el => el.slice(0, -1) + el.slice(-1).toLowerCase()).join(" ");
}


// Examples
console.log(alienLanguage(str1));
console.log(alienLanguage(str2));