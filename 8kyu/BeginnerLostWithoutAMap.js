/**
 * https://www.codewars.com/kata/57f781872e3d8ca2a000007e/train/javascript
 * Given an array of integers, return a new array with each value doubled.
 *
 * For example:
 *
 * [1, 2, 3] --> [2, 4, 6]
 */


// Entry data
const x = [4, 1, 1, 1, 4];


// Solution 1
function maps(x) {
    return x.map(el => el * 2);
}


// Examples
console.log(maps(x));
