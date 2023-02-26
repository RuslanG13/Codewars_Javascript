/**
 * Declare a variable for storing a String. 
If variable equal to ‘apple’, log ‘I like it’ to the console. 
If variable equal to ’orange’, log ‘I can eat it’ to the console. 
If variable equal to ’grapefruit’, log ‘I cannot eat it’ to the console. 
If variable equal to something else, log ‘Unknown fruit detected’ to the console. 
 */

const preferFruit = "orange";

if (preferFruit === "apple") {
    console.log("I like it");
} else if (preferFruit === "orange") {
    console.log("I can eat it");
} else if (preferFruit === "grapefruit") {
    console.log("I cannot eat it");
} else {
    console.log("Unknown fruit detected");
}