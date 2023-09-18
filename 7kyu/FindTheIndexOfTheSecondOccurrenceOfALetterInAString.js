/**
 * https://www.codewars.com/kata/63f96036b15a210058300ca9/train/javascript
 * In this kata, you need to write a function that takes a string and a letter as input and then returns the index of the
 *  second occurrence of that letter in the string. If there is no such letter in the string, then the function should return -1.
 *  If the letter occurs only once in the string, then -1 should also be returned.

Examples:

secondSymbol('Hello world!!!','l')  --> 3
secondSymbol('Hello world!!!', 'A') --> -1
Good luck ;) And don't forget to rate this Kata if you liked it.
 */


// Entry data
const str = "Hello world!!!";

const symbol1 = 'l';
const symbol2 = 'o';
const symbol3 = 'A';


// Solution 1
const secondSymbol = (s, symbol) => {
    let indexOfFirstElement = null;

    for (let i = 0; i < s.length; i++) {
        if (s[i] == symbol) {
            indexOfFirstElement = i;
            break;
        }
    }

    for (let i = indexOfFirstElement + 1; i < s.length; i++) {
        if (s[i] == symbol) {
            return i;
        }
    }

    return -1;
}


// Examples
console.log(secondSymbol(str, symbol1));
console.log(secondSymbol(str, symbol2));
console.log(secondSymbol(str, symbol3));  
