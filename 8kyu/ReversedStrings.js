/**
 * https://www.codewars.com/kata/5168bb5dfe9a00b126000018
 * Complete the solution so that it reverses the string passed into it.
 *
 * 'world'  =>  'dlrow'
 * 'word'   =>  'drow'
 */


// Entry data
const x = 'world';


// Solution 1
function solution(str) {
    return str.split('').reverse().join('');
}


// Examples
console.log(solution(x));