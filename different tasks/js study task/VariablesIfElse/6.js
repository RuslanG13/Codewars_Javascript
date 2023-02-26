/**
 * 
Declare a variable for storing Array which has 4 elements (Numbers) ( e.g. [2, 3, 5, 0] )
If sum of first and second element equal to sum of third and fourth, print “you won lottery!” (e.g. [2, 3, 5, 0] => 2 + 3 = 5 + 0)
If not, print “Loser”
 */

const numbers = [2, 3, 5, 0];

if ((numbers[0] + numbers[1]) === (numbers[2] + numbers[3])) {
    console.log("You won lottery!");
} else {
    console.log("Loser");
}


