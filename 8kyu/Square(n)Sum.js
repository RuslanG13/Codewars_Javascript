/**
 * https://www.codewars.com/kata/515e271a311df0350d00000f/train/javascript
 * Complete the square sum function so that it squares each number passed into it and then sums the results together.
 *
 * For example, for [1, 2, 2] it should return 9 because 1^1 + 2^2 + 2^2 = 9.
 */

const arrFull = [0, 3, 4, 5];
const arrEmpty = [];


// Solution 1
const squareSum = (numbers) => {
    return numbers.reduce((prev, curr) => prev + (curr * curr), 0);
}

// Solution 2
function squareSum2(numbers) {
    let sumOfElements = 0;
    for (let i = 0; i < numbers.length; i++) {
        sumOfElements += numbers[i] * numbers[i];
    }

    return sumOfElements;
}


// Examples
console.log(squareSum(arrFull));
console.log(squareSum(arrEmpty));

console.log(squareSum2(arrFull));
console.log(squareSum2(arrEmpty));