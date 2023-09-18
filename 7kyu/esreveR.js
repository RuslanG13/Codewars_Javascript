/**
 * https://www.codewars.com/kata/5413759479ba273f8100003d/train/javascript
 * Write a function reverse which reverses a list (or in clojure's case, any list-like data structure)

  (the dedicated builtin(s) functionalities are deactivated)
 */


// Entry data
const arr1 = [1, 2, 3];
const arr2 = [1, null, 14, "two"];


// Solution 1
const reverse = (array) => {
    let arrReverse = [];

    for (let i = array.length - 1; i >= 0; i--) {
        arrReverse.push(array[i]);
    }

    return arrReverse;
}


// Examples
console.log(reverse(arr1));
console.log(reverse(arr2));  