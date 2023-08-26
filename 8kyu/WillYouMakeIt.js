/**
 * You were camping with your friends far away from home, but when it's time to go back, you realize that your fuel
 * is running out and the nearest pump is 50 miles away! You know that on average, your car runs on about 25 miles per
 * gallon. There are 2 gallons left.
 *
 * Considering these factors, write a function that tells you if it is possible to get to the pump or not.
 *
 * Function should return true if it is possible and false if not.
 */

let distanceToPump = 50;
let distanceToPump2 = 51;
let mpg = 25;
let fuelLeft = 2;


// Solution1
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    return distanceToPump <= (mpg * fuelLeft);
};


// Examples
console.log(zeroFuel(distanceToPump, mpg, fuelLeft));
console.log(zeroFuel(distanceToPump2, mpg, fuelLeft));