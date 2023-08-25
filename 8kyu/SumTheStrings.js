/**
 * https://www.codewars.com/kata/53369039d7ab3ac506000467/train/javascript
 * Create a function that takes 2 integers in form of a string as an input, and outputs the sum (also as a string):

Example: (Input1, Input2 -->Output)

"4",  "5" --> "9"
"34", "5" --> "39"
"", "" --> "0"
"2", "" --> "2"
"-5", "3" --> "-2"
Notes:

If either input is an empty string, consider it as zero.

Inputs and the expected output will never exceed the signed 32-bit integer limit (2^31 - 1)
 */

const number1 = '9';
const number2 = '3';


//Solution 1
const sumStr = (a, b) => String(+a + +b);


//Examples
console.log(sumStr(number1, number2));

