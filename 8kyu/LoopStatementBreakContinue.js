/**
 * https://www.codewars.com/kata/5721c189cdd71194c1000b9b/train/javascript
 * Task
 * Coding in function grabDoll. function accept 1 parameter:dolls. it's a string array, a list of some dolls.
 *
 * You need traverse dolls by using for loop. If element is "Hello Kitty" or "Barbie doll",
 * you should push it to a bag(bag is an array, I've defined in the function); if it's other strings,
 * we should use continue skip it.
 *
 * When the bag has three element, bag is full. You should use break jump out the loop; If bag is not full,
 * you should traverse dolls until the last element.
 *
 * Return the bag after for loop finished.
 */


// Entry data
const dolls1 = ["Mickey Mouse", "Barbie doll", "Hello Kitty", "Hello Kitty", "Hello Kitty", "Snow white"];
const dolls2 = ["Mickey Mouse", "Hello Kitty", "Snow white"]


// Solution 1
function grabDoll(dolls) {
    let bag = [];

    for (let i = 0; i < dolls.length; i++) {
        if (dolls[i] === "Hello Kitty" || dolls[i] === "Barbie doll") {
            bag.push(dolls[i]);
        } else {
            continue;
        }

        if (bag.length === 3) {
            break;
        }
    }

    return bag;
}


// Examples
console.log(grabDoll(dolls1));
console.log(grabDoll(dolls2));