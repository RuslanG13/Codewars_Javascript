/**
 * https://www.codewars.com/kata/5547929140907378f9000039/train/javascript
 * Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.
 *
 * Examples
 * "hello"     -->  "hll"
 * "codewars"  -->  "cdwrs"
 * "goodbye"   -->  "gdby"
 * "HELLO"     -->  "HELLO"
 * don't worry about uppercase vowels
 * y is not considered a vowel for this kata
 */

const str = "hello";
const str2 = "HELLO";


// Solution 1
function shortcut(string) {
    const filteredArr = [];
    for (let i = 0; i < string.length; i++) {
        if (string[i] !== "a" &&
            string[i] !== "e" &&
            string[i] !== "i" &&
            string[i] !== "o" &&
            string[i] !== "u" ) {
            filteredArr.push(string[i]);
        }
    }

    return filteredArr.join("");
}

// Solution 2
function shortcut2(string){
    return string.replace(/[aeiou]/g,'')
}


// Examples
console.log(shortcut(str));
console.log(shortcut(str2));

console.log(shortcut2(str));
console.log(shortcut2(str2));
