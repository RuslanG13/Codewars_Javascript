/**
 * https://www.codewars.com/kata/5703c093022cd1aae90012c9/train/javascript
 * Be Concise IV - Index of an element in an array
Task
Provided is a function Kata which accepts two parameters in the following order: array, element and returns the index of the 
element if found and "Not found" otherwise. Your task is to shorten the code as much as possible in order to meet the strict
 character count requirements of the Kata. (no more than 161) You may assume that all array elements are unique.
 */


// Entry data
const arr = [2, 3, 7, 5, 11];
const dataPos = 11;
const dataNeg = 8;


// Solution 1
const find = (arr, num) => {
    let i = arr.indexOf(arr.find(el => el == num));
    return i >= 0 ? i : "Not found";
}


// Solution 2
const find2 = (arr, num) => {
    let el = arr.find(el => el === num)
    return arr.indexOf(el) >= 0 ? arr.indexOf(el) : "Not found";
}


// Examples
console.log(find(arr, dataPos));
console.log(find(arr, dataNeg));

console.log(find2(arr, dataPos));
console.log(find2(arr, dataNeg));


