/**
 * https://www.codewars.com/kata/5a34b80155519e1a00000009/train/javascript
 * Return a new array consisting of elements which are multiple of their own index in input array (length > 1).

Some cases:
[22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]

[68, -1, 1, -7, 10, 10] => [-1, 10]

[-56,-85,72,-26,-14,76,-27,72,35,-21,-67,87,0,21,59,27,-92,68] => [-85, 72, 0, 68]
 */


// Entry data
const arr1 = [22, -6, 32, 82, 9, 25];
const arr2 = [68, -1, 1, -7, 10, 10];
const arr3 = [-56, -85, 72, -26, -14, 76, -27, 72, 35, -21, -67, 87, 0, 21, 59, 27, -92, 68];


// Solution 1
const multipleOfIndex = (array) => array.filter((el, idx) => (el % idx === 0) || (el == 0 && idx == 0))


// Examples
console.log(multipleOfIndex(arr1));
console.log(multipleOfIndex(arr2));
console.log(multipleOfIndex(arr3));