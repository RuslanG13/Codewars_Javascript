/**
 * https://www.codewars.com/kata/56676e8fabd2d1ff3000000c/train/javascript
 * Can you find the needle in the haystack?
 *
 * Write a function findNeedle() that takes an array full of junk but containing one "needle"
 *
 * After your function finds the needle it should return a message (as a string) that says:
 *
 * "found the needle at position " plus the index it found the needle, so:
 *
 * Example(Input --> Output)
 *
 * ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5"
 * Note: In COBOL, it should return "found the needle at position 6"
 */

const haystack = ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"];


// Solution 1
function findNeedle(haystack) {
    for (let needle of haystack) {
        if (needle === "needle") {
            return `found the needle at position ${haystack.indexOf(needle)}`;
        }
    }
}

// Solution 2
function findNeedle2(haystack) {
    return `found the needle at position ${haystack.indexOf("needle")}`;
}


// Examples
console.log(findNeedle(haystack));
console.log(findNeedle2(haystack));
