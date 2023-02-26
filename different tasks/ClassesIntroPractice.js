class Mathematics {
    addition(a, b) {
        return a + b;
    }

    subtraction(a, b) {
        return b - a;
    }

    multiplication(a, b) {
        return a * b;
    }

    divison(a, b) {
        if (b === 0) {
            return "You cannot divide by zero";
        } else {
            return a / b;
        }
    }
}

class AdditionalMath extends Mathematics {
    power(a, b) {
        return Math.pow(a, b);
    }

    squareRoot(a) {
        return Math.sqrt(a);
    }

    randomNumber(a) {
        return Math.round(Math.random() * a);
    }
}

const superMath = new AdditionalMath();

console.log(superMath.addition(5, 10));
console.log(superMath.subtraction(5, 10));
console.log(superMath.multiplication(5, 10));
console.log(superMath.divison(5, 10));
console.log(superMath.divison(5, 0));

console.log(superMath.power(5, 3));
console.log(superMath.squareRoot(9));
console.log(superMath.randomNumber(3));