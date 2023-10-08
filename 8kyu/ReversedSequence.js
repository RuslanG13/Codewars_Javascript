/**
 * https://www.codewars.com/kata/5a00e05cc374cb34d100000d/train/javascript
 * Build a function that returns an array of integers from n to 1 where n>0.
 *
 * Example : n=5 --> [5,4,3,2,1]
 */


// Entry data
const entryValue = 5;


// Solution 1
const reverseSeq = n => {
    let arr = [];
    for (let i = n; i > 0; i--) {
        arr.push(i);
    }

    return arr;
}

// Solution 2
const reverseSeq2 = n => {
    let arr = [];

    while (n > 0) {
        arr.push(n);
        n--;
    }
    return arr;
}


// Examples
console.log(reverseSeq(entryValue));
console.log(reverseSeq2(entryValue));

