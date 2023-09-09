/**
 * https://www.codewars.com/kata/57eae65a4321032ce000002d/train/javascript
 * Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'.
 * Return the resulting string.
 *
 * Note: input will never be an empty string
 */


// Entry data
let x = "45385593107843568";


// Solution 1
function fakeBin(x) {
    let arr = x.split('');
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 5) {
            arr[i] = 0;
        } else {
            arr[i] = 1;
        }
    }

    return arr.join('');
}


// Solution 2
function fakeBin2(x) {
    return x.split('').map(el => el < 5 ? 0 : 1).join('');
}


// Examples
console.log(fakeBin(x));
console.log(fakeBin2(x));
