/**
 * 
Declare a variable for storing Boolean or Number
If variable equal to true OR equal to false, print “Boolean data”
If variable equal or more that 0, print “Number”
If something else, print “error”
 */

let isBoolean = true;

if (isBoolean === true || isBoolean === false) {
    console.log("Boolean data");
} else if (isBoolean >= 0) {
    console.log("Number");
} else {
    console.log("error");
}