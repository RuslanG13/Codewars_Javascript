/**
 * https://www.codewars.com/kata/5ce9c1000bab0b001134f5af/train/javascript
 * Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), 
is part of the fourth quarter.

Constraint:

1 <= month <= 12
 */


// Entry data
const month1 = 3;
const month2 = 8;
const month3 = 11;


// Solution 1
const quarterOf = (month) => {
    switch (month) {
        case 1:
        case 2:
        case 3:
            return 1;
            break;
        case 4:
        case 5:
        case 6:
            return 2;
            break;
        case 7:
        case 8:
        case 9:
            return 3;
            break;
        default:
            return 4;
            break;
    }
}


// Examples
console.log(quarterOf(month1));
console.log(quarterOf(month2));
console.log(quarterOf(month3));