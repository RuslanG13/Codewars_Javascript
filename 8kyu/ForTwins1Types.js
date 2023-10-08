/**
 * https://www.codewars.com/kata/59c1302ecb7fb48757000013/train/javascript
 * Prolog:
This kata series was created for friends of mine who just started to learn programming.
 Wish you all the best and keep your mind open and sharp!

Task:
Write a function that will accept two parameters: variable and type and check if type of variable is matching type.
 Return true if types match or false if not.

Examples:
42, "number"   --> true
"42", "number" --> false
 */


// Entry data
const number = 42;

const typeOfVariable1 = 'number';
const typeOfVariable2 = 'boolean';


//Solution 1
const typeValidation = (variable, type) => typeof variable === type;


//Examples
console.log(typeValidation(number, typeOfVariable1));
console.log(typeValidation(number, typeOfVariable2));