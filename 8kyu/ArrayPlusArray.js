/**
 * https://www.codewars.com/kata/5a2be17aee1aaefe2a000151/train/javascript
 * I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

P.S. Each array includes only integer numbers. Output is a number too.
 */


// Entry data
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];


// Solution 1
const arrayPlusArray = (arr1, arr2) => [...arr1, ...arr2].reduce((iter, accum) => accum += iter);


// Examples
console.log(arrayPlusArray(arr1, arr2));