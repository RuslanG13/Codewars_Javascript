/**
 * https://www.codewars.com/kata/5715eaedb436cf5606000381/train/javascript
 * You get an array of numbers, return the sum of all of the positives ones.
 *
 * Example [1,-4,7,12] => 1 + 7 + 12 = 20
 *
 * Note: if there is nothing to sum, the sum is default to 0.
 */

const arr1 = [-1, -2, -3, -4, -5];
const arr2 = [];
const arr3 = [1, -2, 3, 4, 5];


// Solution 1
function positiveSum(arr) {
    let sumPosNum = 0;
    for (let positive of arr) {
        if (positive >= 0)
            sumPosNum += positive
    }

    return sumPosNum;
}


// Solution 2
const positiveSum2 = arr => {
    return arr.filter(el => el >= 0).reduce((curr, accum) => accum += curr, 0);
}


// Examples
console.log(positiveSum(arr1));
console.log(positiveSum(arr2));
console.log(positiveSum(arr3));
console.log("-------/-------");
console.log(positiveSum2(arr1));
console.log(positiveSum2(arr2));
console.log(positiveSum2(arr3));