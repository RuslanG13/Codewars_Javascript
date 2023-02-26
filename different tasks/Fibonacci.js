function fibonacci(n) {
    if (n === 1 || n === 2) {
        return 1;
    } else {
        let i = 0;
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

console.log(fibonacci(10));
