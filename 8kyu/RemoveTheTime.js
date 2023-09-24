/**
 * https://www.codewars.com/kata/56b0ff16d4aa33e5bb00008e/train/javascript
 * Task Description
You're re-designing a blog, and the blog's posts have the Weekday Month Day, time format for showing the date and time
 when a post was made, e.g., Friday May 2, 7pm.

You're running out of screen real estate, and on some pages you want to display a shorter format, Weekday Month Day that omits
 the time.

Write a function that takes the website date/time in its original string format and returns the shortened format.

Input
Input will always be a string, e.g., "Friday May 2, 7pm". 

Output
Output will be the shortened string, e.g., "Friday May 2".
 */


// Entry data
const str = "Tuesday January 29, 10pm";


// Solution 1
const shortenToDate = longDate => {
    let arrDate = longDate.split(",");


    return arrDate[0];
}


// Examples
console.log(shortenToDate(str));
