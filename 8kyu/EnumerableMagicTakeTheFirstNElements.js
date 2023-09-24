/**
 * https://www.codewars.com/kata/545afd0761aa4c3055001386/train/javascript
 * Create a function that accepts a list/array and a number n, and returns a list/array of the first n elements 
 * from the list/array.

If you need help, here's a reference:

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
 */


// Entry data
const arr = [0, 1, 2, 3, 5, 8, 13];
const num = 3;


// Solution 1
const take = (arr, n) => arr.filter((el, idx) => idx < n);


// Examples
console.log(take(arr, num));