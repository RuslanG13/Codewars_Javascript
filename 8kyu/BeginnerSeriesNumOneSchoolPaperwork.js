/**
 * https://www.codewars.com/kata/55f9b48403f6b87a7c0000bd/train/javascript
 * Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.

Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.

Example:
n= 5, m=5: 25
n=-5, m=5:  0
Waiting for translations and Feedback! Thanks!
 */


// Entry data
const classmates1 = 5;
const classmates2 = 5;
const classmates3 = -5;
const classmates4 = -5;
const classmates5 = 5;

const pages1 = 5;
const pages2 = -5;
const pages3 = -5;
const pages4 = 5;
const pages5 = 0;


// Solution 1
const paperwork = (n, m) => (n < 0 || m < 0) ? 0 : n * m;


// Examples
console.log(paperwork(classmates1, pages1));
console.log(paperwork(classmates2, pages2));
console.log(paperwork(classmates3, pages3));
console.log(paperwork(classmates4, pages4));
console.log(paperwork(classmates5, pages5));