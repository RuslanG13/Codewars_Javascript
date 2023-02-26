/**
 * 
Create a function health() which accepts three arguments - age, weight, factor:
This function will check the person’s data and will return true or false.
This function should have res variable to store the result.
Function should add age plus weight then divide by factor and assign the result to res variable
If res more than 30 return true
If res less than or equal to 30 then return false
Print what the function returns to the console.
 */

function health(age, weight, factor) {
    let res = (age + weight) / factor;
    if (res > 30) {
        return true;
    } else if (res <= 30) {
        return false;
    }
}

console.log(health(29, 84, 6));
console.log(health(29, 84, 1));