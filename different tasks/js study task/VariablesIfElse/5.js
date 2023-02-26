/**
 * Declare a variable for storing Object which describes a cake with the following keys:
Size: (Number), price: (Number)
If size less than 25 AND price more than 100, print “Small and expensive”
If size more than or equal to 25 AND price more than 100, print “Large and expensive” 
If size less than 25 AND price less than or equal to 100, print “Small and inexpensive”
If size more than or equal to 25 AND price less than or equal to 100, print “Large and inexpensive”

 */

const cake = {
    size: 25,
    price: 100
};

if (cake.size < 25 && cake.price > 100) {
    console.log("Small and expensive");
} else if (cake.size > 25 && cake.price > 100) {
    console.log("Large and expensive");
} else if (cake.size < 25 && cake.price >= 100) {
    console.log("Small and inexpensive");
} else if (cake.size >= 25 && cake.price <= 100) {
    console.log("Large and inexpensive");
}