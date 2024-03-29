/**
 * https://www.codewars.com/kata/534ea96ebb17181947000ada/train/javascript
 * Your task is to split the chocolate bar of given dimension n x m into small squares. Each square is of size 1x1
 * and unbreakable. Implement a function that will return minimum number of breaks needed.
 *
 * For example if you are given a chocolate bar of size 2 x 1 you can split it to single squares in just one break,
 * but for size 3 x 1 you must do two breaks.
 *
 * If input data is invalid you should return 0 (as in no breaks are needed if we do not have any chocolate to split).
 * Input will always be a non-negative integer.
 */


// Entry data
const num1 = 0;
const num2 = 0;

const num3 = 5;
const num4 = 5;


// Solution 1
const breakChocolate = (n, m) => (n * m) === 0 ? 0 : (n * m) - 1;


// Solution2
function breakChocolate2(n, m) {
    if (n === 0 || m === 0) {
        return 0;
    } else {
        return (n * m) - 1;
    }

}


// Examples
console.log(breakChocolate(num3, num4));
console.log(breakChocolate(num1, num2));