/**
 * https://www.codewars.com/kata/5388f0e00b24c5635e000fc6/train/javascript
 * I would like to be able to pass an array with two elements to my swapValues function to swap the values.
 * However it appears that the values aren't changing.
 *
 * Can you figure out what's wrong here?
 */


// Entry data
const arr = [1, 2];


// Solution 1
const swapValues = arr => arr.reverse();


// Examples
console.log(swapValues(arr));