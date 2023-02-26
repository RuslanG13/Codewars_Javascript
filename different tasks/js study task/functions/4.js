/**
 * Create function lengths() which accepts two arguments - length and region:
This function will check the region and return the length using that region’s units.
The function should have res variable inside to store the result.
If region is equal to ‘usa’ the function should concatenate length, space, and string ‘inches’ and assign the result to the res variable.
If region is equal to ‘eu’ the function should concatenate length, space, and string ‘centimeters’ and assign the result to the res variable.
If region is equal to something else the function should concatenate length, space, and string ‘unknown units’ and assign the result to the res variable.
The function  should return res;
Print what the function returns to the console.
Example: length = 100, region = ‘usa’, ‘100 inches’ should be printed to the console
 */

function lengths(length, region) {
    let res;
    if (region === "usa") {
        res = length + " inches";
    } else if (region === "eu") {
        res = length + " centimeters";
    } else {
        res = length + " unknown units";
    }

    return res;
}

console.log(lengths(13, "usa"));
console.log(lengths(13, "eu"));
console.log(lengths(13, "ua"));