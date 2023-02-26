/**
 * https://www.codewars.com/kata/57cc975ed542d3148f00015b/train/javascript
 * You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.
 *
 * Array can contain numbers or strings. X can be either.
 *
 * Return true if the array contains the value, false if not.
 */

let a = [101, 45, 75, 105, 99, 107];
let x = 107;
let y = 180;


// Solution 1
function check(a, x) {
    return a.some(el => el === x);
}

// Solution 2
function check2(a,x){
    return a.includes(x);
}


// Examples
console.log(check(a, x));
console.log(check(a, y));