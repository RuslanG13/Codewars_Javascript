/**
 * https://www.codewars.com/kata/57256064856584bc47000611/train/javascript
 * Task
 * Coding in function howManySmaller, function accept 2 parameter:arr and n. arr is a decimal array. n is a decimal.
 *
 * The first mission: let all elements in the array keep two decimal places(No need to convert number n).
 *
 * The second mission: Traversal arr, count the number of the element which smaller than n and return it.
 *
 * for example:
 *
 * howManySmaller([1.234,1.235,1.228],1.24) should return 2
 * howManySmaller([1.1888,1.1868,1.1838],1.19) should return 1
 * howManySmaller([3.1288,3.1212,3.1205],3.1212) should return 2
 */

const arr = [3.1288, 3.1212, 3.1205];
const n = 3.1212;


// Solution 1
const howManySmaller = (arr,n) =>  {
    let count = 0;
    arr.map(el => +el.toFixed(2)).forEach(el => el < n ? count++ : count);

    return count;
};


// Examples
console.log(howManySmaller(arr, n));