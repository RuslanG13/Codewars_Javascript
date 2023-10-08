/**
 * Kids drink toddy.
Teens drink coke.
Young adults drink beer.
Adults drink whisky.
Make a function that receive age, and return what they drink.

Rules:

Children under 14 old.
Teens under 18 old.
Young under 21 old.
Adults have 21 or more.
Examples: (Input --> Output)

13 --> "drink toddy"
17 --> "drink coke"
18 --> "drink beer"
20 --> "drink beer"
30 --> "drink whisky"
 */


// Entry data
const age1 = 13;
const age2 = 17;
const age3 = 18;
const age4 = 20;
const age5 = 30;


//Solution1
const peopleWithAgeDrink = (old) => {
    return old < 14 ? "drink toddy" :
    old < 18 ? "drink coke" :
    old < 21 ? "drink beer" : "drink whisky";
}


//Examples
console.log(peopleWithAgeDrink(age1));
console.log(peopleWithAgeDrink(age2));
console.log(peopleWithAgeDrink(age3));
console.log(peopleWithAgeDrink(age4));
console.log(peopleWithAgeDrink(age5));
