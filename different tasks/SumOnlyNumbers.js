/**
 * Sum only numbers from function arguments
 */

// Solution
function sumOnlyNumbers(a, b, c, d) {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] === "number") {
            sum += arguments[i];
        }
    }

    return sum;
}


// Examples
console.log(sumOnlyNumbers(1, "dad", "dsad", 4));