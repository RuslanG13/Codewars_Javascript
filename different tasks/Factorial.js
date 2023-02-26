// Solution 1
const factorial = (name) => {
    if (name && typeof name === 'number' && name > 0) {
        let result = 1;
        for (let i = 1; i <= name; i++) {
            result *= i;
        }

        return result;
    } else if (name === 0) {
        return 1;
    } else {
        throw new Error("Input error");
    }
}

// Examples
console.log(factorial(5));
