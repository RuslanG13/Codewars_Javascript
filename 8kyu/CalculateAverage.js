/**
 * https://www.codewars.com/kata/57a2013acf1fa5bfc4000921/train/javascript
 * Write a function which calculates the average of the numbers in a given list.
 *
 * Note: Empty arrays should return 0.
 */

// Entry data
const array = [28, 45, 91, 91, 59, 5, 43, 44, 6, 91, 87, 37, 43, 67];
const arr = [];



// Solution 1
const findAverage = (array) => {
    if (array.length === 0) return 0;
    const average = array.reduce((iter, accum) => accum += iter, 0);

    return average / array.length;
}

// Solution 2
function findAverage2(array) {
    if (array.length === 0) {
        return 0;
    }

    let avg = 0;
    for (let i = 0; i < array.length; i++) {
        avg += array[i];
    }

    return avg / array.length;
}


// Examples
console.log(findAverage(array));
console.log(findAverage(arr));

console.log(findAverage2(array));
console.log(findAverage2(arr));