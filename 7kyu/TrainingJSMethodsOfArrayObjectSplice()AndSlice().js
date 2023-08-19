/**
 * https://www.codewars.com/kata/572cb264362806af46000793/train/javascript
 Task
 Coding in function threeInOne. function accept 1 parameters arr, it's a 1D number array. Your task is to merge each of
 the 3 elements into 1 elements (sum value) and return the result.

 Note1: You should not modify the original array.

 Note2: Because this is a beginner Kata, and due to the author's mercy ;-), so you do not have to verify the validity
 of the parameter, and do not worry about the number of elements of the array is not a multiple of 3.

 Example:

 threeInOne( [1,2,3]) should return [6]
 threeInOne( [1,2,3,4,5,6]) should return [6,15]
 threeInOne( [1,2,3,4,5,6,7,8,9]) should return [6,15,24]
 threeInOne( [1,3,5,2,4,6,7,7,7]) should return [9,12,21]
 */

const arr = [32, 35, 47, 3, 25, 49, 39, 17, 8, 0, 24, 38, 37, 31, 24, 8, 10, 33];
const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const arr3 = [1, 2, 3, 4, 5, 6];


// Solution 1
// function threeInOne(arr) {
//     let a = arr;
//     let newArr = [];
//     for (let i = 0, count = 0; i < a.length; i++) {
//         count++;
//         if (count % 3 === 0) {
//             newArr.push(a[0] + a[1] + a[2]);
//             a.splice(0, 3);
//         }
//         i = 0;
//     }
//     return newArr;
// }

function threeInOne(arr) {
    let newArr = [];
    for (let i = 0, count = 0; i < arr.length; i++) {
        count++;
        if (count % 3 === 0) {
            newArr.push(arr.slice(arr[i], 3));
            i++;
            count++;
        }
    }
    return newArr;
}

// Examples
console.log(threeInOne(arr));
console.log(threeInOne(arr2));
console.log(threeInOne(arr3));