/**
 * https://www.codewars.com/kata/59557b2a6e595316ab000046/train/javascript
 * Convert a hash into an array. Nothing more, Nothing less.

{name: 'Jeremy', age: 24, role: 'Software Engineer'}
should be converted into

[["age", 24], ["name", "Jeremy"], ["role", "Software Engineer"]]
Note: The output array should be sorted alphabetically by key name.

Good Luck!

*/


// Entry data
const person = {
    name: "Jeremy",
    age: 24
}


// Solution 1
const convertHashToArray = hash => Object.entries(hash).sort();


// Examples
console.log(convertHashToArray(person));