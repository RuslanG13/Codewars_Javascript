/**
 * https://www.codewars.com/kata/57280481e8118511f7000ffa/train/javascript
 * Task
 * Implement a function which accepts 2 arguments: string and separator.
 *
 * The expected algorithm: split the string into words by spaces, split each word into separate characters and join
 * them back with the specified separator, join all the resulting "words" back into a sentence with spaces.
 *
 * For example:
 *
 * splitAndMerge("My name is John", " ")  ==  "M y n a m e i s J o h n"
 * splitAndMerge("My name is John", "-")  ==  "M-y n-a-m-e i-s J-o-h-n"
 * splitAndMerge("Hello World!", ".")     ==  "H.e.l.l.o W.o.r.l.d.!"
 * splitAndMerge("Hello World!", ",")     ==  "H,e,l,l,o W,o,r,l,d,!"
 *
 */

const str = "My name is John";
const separator1 = " ";
const separator2 = "-";


// Solution 1
const splitAndMerge = (string, separator) => {
    return string.split(" ").map(el => el.split('').join(separator)).join(" ");
};


// Examples
console.log(splitAndMerge(str, separator1));
console.log(splitAndMerge(str, separator2));
