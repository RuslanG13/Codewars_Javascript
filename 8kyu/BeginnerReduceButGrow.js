/**
 * https://www.codewars.com/kata/57f780909f7e8e3183000078/train/javascript
 * Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24
 */


// Entry data
const arr1 = [4, 1, 1, 1, 4];
const arr2 = [2, 2, 2, 2, 2, 2];


// Solution 1
const grow = (x) => x.reduce((iter, accum) => accum *= iter);


// Examples
console.log(grow(arr1));
console.log(grow(arr2));