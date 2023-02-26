/**
 * factor() which accepts one argument - object:
This function will generate eligibility factor based on a person's data. Person’s data represented by an object.
Object schema is the following:
{
    firstName: ‘String’, 
    lastName: ‘String’,
    montlyIncome: Number, //just amount in dollars. No currency. Number data type.
    married: true,          //true if married and false if not.
    children: Number          //0 if none or just a number if has children.
}
Function should have res variable inside to store the result.
If a person is single and no kids then assign the montlyIncome directly to the res variable.
If a person is married and no kids then divide montlyIncome by 2 and assign to the res variable.
If a person is single and has kids then divide montlyIncome by (1 + number of  children) and assign to the res variable.
If a person is married and has kids then divide montlyIncome by (2 + number of  children) and assign to the res variable.
Function should return res.
 */

/**
 * eligibility() which accepts one argument - factor which is the result of the previous function:
This function will check if the person is eligible for benefits based on generated eligibility factor.
If factor is less than or equal to 1000 then return ‘Eligible’,
If factor is more than 1000 then return ‘Not Eligible’
Print what function returns to the console.

Tip: function can be an argument for another function when you call it. For example:
function1(number) returns 5, and function2() uses that return as an argument, then function1() can be passed into function2() as an argument:
 */

const obj = {
    firstName: "Ruslan",
    lastName: "Gudenko",
    montlyIncome: 700,
    married: false,
    children: 0
};

// function 1
function factor(object) {
    let factor;
    if (object.married === false && object.children === 0) {
        factor = object.montlyIncome;
    } else if (object.married === true && object.children === 0) {
        factor = object.montlyIncome / 2;
    } else if (object.married === false & object.children > 0) {
        factor = object.montlyIncome / (1 + object.children);
    } else if (object.married === true && object.children > 0) {
        factor = object.montlyIncome / (2 + object.children);
    }

    return factor;
}

//function 2
function eligibility(index) {
    if (index <= 1000) {
        return "‘Eligible’"
    } else if (index > 1000) {
        return "No eligible";
    }
}

console.log(eligibility(factor(obj)));