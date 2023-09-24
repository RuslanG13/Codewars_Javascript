/**
 * https://www.codewars.com/kata/5769b3802ae6f8e4890009d2/train/javascript
 * Take an array and remove every second element from the array. Always keep the first element and start removing with the next
 *  element.

Example:
["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

None of the arrays will be empty, so you don't have to worry about that!
 */


// Entry data
const arr1 = ['Hello', 'Goodbye', 'Hello Again'];
const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


// Solution 1
const removeEveryOther = arr => arr.filter((el, idx) => idx % 2 == 0);


// Examples
console.log(removeEveryOther(arr1));
console.log(removeEveryOther(arr2));