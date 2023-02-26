/**
 * Create a function lottery() which accepts one argument - array:
This function will check if a user won a lottery. Array should contain only 4 random numbers.
If sum of first two elements equal to sum of two last elements - return ‘Won’
If sum of first two elements not equal to sum of two last elements - return ‘Try again”
Print what the function returns to the console.
Example: array = [1, 5, 6, 0], ‘Won’ should be printed to the console.
Tip: syntax for if-else with direct return is approximately the following:
if (true) {
    return ‘Won’;
}
 */

function lottery(array) {
    if ((array[0] + array[1]) === (array[2] + array[3])) {
        return "Won";
    } else if ((array[0] + array[1]) !== (array[2] + array[3])) {
        return "Try again";
    }
}

console.log(lottery([1, 3, 0, 4]));
console.log(lottery([1, 3, 2, 1]));