/**
 * https://www.codewars.com/kata/555086d53eac039a2a000083/train/javascript
 * Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each.
 * If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.
 *
 * Write a function that will take the number of petals of each flower and return true if they are in love and false
 * if they aren't.
 */


// Solution 1
function loveFunc(flower1, flower2) {
    return (flower1 + flower2) % 2 !== 0;
}

// Solution 2
function loveFunc2(flower1, flower2) {
    return (flower1 + flower2) % 2 !== 0;
}

// Solution 3
function loveFunc3(flower1, flower2) {
    if ((flower1 + flower2) % 2 !== 0) {
        return true;
    } else {
        return false;
    }
}


// Examples
console.log(loveFunc(3, 4));
console.log(loveFunc(4, 4));