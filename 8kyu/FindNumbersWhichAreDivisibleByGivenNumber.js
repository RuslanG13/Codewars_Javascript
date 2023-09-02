/**
 * https://www.codewars.com/kata/55edaba99da3a9c84000003b/train/javascript
 * Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor.
 *  First argument is an array of numbers and the second is the divisor.

Example(Input1, Input2 --> Output)
[1, 2, 3, 4, 5, 6], 2 --> [2, 4, 6]
 */


// Entry data
const array1 = [1, 2, 3, 4, 5, 6];
const divisor1 = 2;

const array2 = [0];
const divisor2 = 4;


// Solution 1
const divisibleBy = (numbers, divisor) => numbers.filter(el => el % divisor === 0);


// Examples
console.log(divisibleBy(array1, divisor1));
console.log(divisibleBy(array2, divisor2));