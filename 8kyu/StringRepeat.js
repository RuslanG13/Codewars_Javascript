/**
 * https://www.codewars.com/kata/57a0e5c372292dd76d000d7e/train/javascript
 * Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated
 * exactly n times.
 *
 * Examples (input -> output)
 * 6, "I"     -> "IIIIII"
 * 5, "Hello" -> "HelloHelloHelloHelloHello"
 */


// Entry data
const a = 1;
const b = 3
const c = "*";


// Solution 1
function repeatStr(n, s) {
    let res = '';
    for (let i = 1; i <= n; i++) {
        res += s;
    }

    return res;
}

// Solution 2
const repeatStr2 = (n, s) => s.repeat(n);


// Examples
console.log(repeatStr(a, c));
console.log(repeatStr(b, c));

console.log(repeatStr2(a, c));
console.log(repeatStr2(b, c));