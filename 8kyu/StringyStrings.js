/**
 * https://www.codewars.com/kata/563b74ddd19a3ad462000054/train/javascript
 * write me a function stringy that takes a size and returns a string of alternating 1s and 0s.

the string should start with a 1.

a string with size 6 should return :'101010'.

with size 4 should return : '1010'.

with size 12 should return : '101010101010'.

The size will always be positive and will only use whole numbers.
 */


// Entry data
const size1 = 7;
const size2 = 4;
const size3 = 1;


// Solution 1
const stringy = (size) => ``.padStart(size, "10");


// Solution 2
function stringy2(size) {
    let str = "1"
    if (size === 1) return str;

    for (let i = 2; i <= size; i++) {
        if (i % 2 == 0) {
            str += "0";
        } else {
            str += "1";
        }
    }

    return str;
}


// Examples
console.log(stringy(size1));
console.log(stringy(size2));
console.log(stringy(size3));

console.log(stringy2(size1));
console.log(stringy2(size2));
console.log(stringy2(size3));

