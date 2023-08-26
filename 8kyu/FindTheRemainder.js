/**
 * https://www.codewars.com/kata/524f5125ad9c12894e00003f/train/javascript
 * Task:
Write a function that accepts two integers and returns the remainder of dividing the larger value by the smaller value.

Division by zero should return NaN.

Examples:
n = 17
m = 5
result = 2 (remainder of `17 / 5`)

n = 13
m = 72
result = 7 (remainder of `72 / 13`)

n = 0
m = -1
result = 0 (remainder of `0 / -1`)

n = 0
m = 1
result - division by zero (refer to the specifications on how to handle this in your language)
 */


//Entry Data
const number1 = 17;
const number2 = 5;

const number3 = 13;
const number4 = 72;

const number5 = 0;


//Solution 1
const remainder = (n, m) => {
    if (Math.min(n, m) === 0) return NaN;

    return n > m ? n % m : m % n;
}


//Examples
console.log(remainder(number1, number2));
console.log(remainder(number3, number4));

console.log(remainder(number1, number5));
console.log(remainder(number5, number1));

console.log(remainder(number5, number5));
