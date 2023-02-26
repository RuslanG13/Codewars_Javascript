/**
 * https://www.codewars.com/kata/53da3dbb4a5168369a0000fe/train/javascript
 * Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
 */


// Solution 1
function evenOrOdd(number) {
    return number % 2 === 0 ? "Even" : "Odd";
}

// Solution 2
function evenOrOdd2(number) {
    if (number % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}


// Examples
console.log(evenOrOdd(2));
console.log(evenOrOdd(5));
