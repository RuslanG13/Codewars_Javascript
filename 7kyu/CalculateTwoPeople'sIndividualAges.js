/**
 * https://www.codewars.com/kata/58e0bd6a79716b7fcf0013b1/train/javascript
 * Create a function that takes in the sum and age difference of two people, calculates their individual ages,
 * and returns a pair of values (oldest age first) if those exist or null/None if:
 *
 * sum < 0
 * difference < 0
 * Either of the calculated ages come out to be negative
 */


// Entry data
const sumPos = 24;
const differencePos = 4;

const somNeg = 65;
const differenceNeg = -5;


// Solution
function getAges(sum, difference) {

   if (sum < 0 || difference < 0) return null;

    let oldest = (sum + difference) / 2;
    let youngest = (sum - difference) / 2;

    return ( oldest && youngest ) >= 0 ? [oldest, youngest] : null;
}


// Examples
console.log(getAges(sumPos, differencePos));
console.log(getAges(somNeg, differenceNeg));