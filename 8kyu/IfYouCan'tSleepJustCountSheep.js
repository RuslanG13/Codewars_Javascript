/**
 * https://www.codewars.com/kata/5b077ebdaf15be5c7f000077/train/javascript
 * Task:
 * Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...".
 * Input will always be valid, i.e. no negative integers.
 */


// Entry data
const number = 3;

// Solution 1
function countSheep(num) {
    let resStr = '';
    for (let i = 1; i <= num; i++) {
        resStr += `${i} sheep...`;
    }

    return resStr;
}


// Examples
console.log(countSheep(number));