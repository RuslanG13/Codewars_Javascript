/**
 * https://www.codewars.com/kata/57a0885cbb9944e24c00008e/train/javascript
 * Write function RemoveExclamationMarks which removes all exclamation marks from a given string.
 */

const string = "Hello World!";


// Solution 1
function removeExclamationMarks(s) {
    let res = "";
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "!") {
            continue;
        }
        res += s[i];
    }
    return res;
}

// Solution 2
const removeExclamationMarks2 = s => {
    let arr = s.split("");
    return arr.filter(el => el !== "!").join("");
}


// Examples
console.log(removeExclamationMarks(string));
console.log(removeExclamationMarks2(string));