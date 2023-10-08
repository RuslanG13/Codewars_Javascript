/**
 * https://www.codewars.com/kata/57216d4bcdd71175d6000560/train/javascript
 * Task
 * Complete function padIt, which accepts 2 parameters:
 *
 * str: a string representing the string to pad. We will pad it with "*" symbols on its left side and on its right side.
 * n: a number indicating how many times to pad the string.
 * Behaviour
 * You need to write a loop statement within the function that loops n times.
 * Each time through the loop it will add one * to str, alternating on which side it is padded: the first time will add
 * a * to the left side of str, the second time will add a * to the right side, and so on.
 */


// Entry data
let str = "a";
let num = 5;
let num2 = 0;
let num3 = 6;


// Solution 1
function padIt(str, n) {
    let arr = str.split('');
    let counter = 1;

    while (counter <= n) {
        if (counter % 2 !== 0) {
            arr.unshift('*');
        } else {
            arr.push('*');
        }
        counter++;
    }

    return arr.join('');
}


// Examples
console.log(padIt(str, num));
console.log(padIt(str, num2));
console.log(padIt(str, num3));