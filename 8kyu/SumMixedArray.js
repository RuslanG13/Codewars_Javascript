/**
 * https://www.codewars.com/kata/57eaeb9578748ff92a000009/train/javascript
 * Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
Return your answer as a number.
 */


// Entry data
const array1 = [9, 3, '7', '3'];
const array2 = ['5', '0', 9, 3, 2, 1, '9', 6, 7];
const array3 = ['3', 6, 6, 0, '5', 8, 5, '6', 2, '0'];


//Solution 1
const sumMix = x => x.map(el => +el).reduce((iter, accum) => accum += iter, 0);


// Solution 2
const sumMix2 = x => {
    let sum = 0;
    x.forEach(el => sum += +el);

    return sum;
}


// Examples
console.log(sumMix(array1));
console.log(sumMix(array2));
console.log(sumMix(array3));

console.log(sumMix2(array1));
console.log(sumMix2(array2));
console.log(sumMix2(array3));