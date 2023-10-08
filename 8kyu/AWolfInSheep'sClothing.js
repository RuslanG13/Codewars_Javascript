/**
 * https://www.codewars.com/kata/5c8bfa44b9d1192e1ebd3d15
 * Wolves have been reintroduced to Great Britain. You are a sheep farmer, and are now plagued by wolves which pretend
 * to be sheep. Fortunately, you are good at spotting them.
 *
 * Warn the sheep in front of the wolf that it is about to be eaten. Remember that you are standing at the front of
 * the queue which is at the end of the array:
 *
 * [sheep, sheep, sheep, sheep, sheep, wolf, sheep, sheep]      (YOU ARE HERE AT THE FRONT OF THE QUEUE)
 *    7      6      5      4      3            2      1
 * If the wolf is the closest animal to you, return "Pls go away and stop eating my sheep".
 * Otherwise, return "Oi! Sheep number N! You are about to be eaten by a wolf!" where N is the sheep's position
 * in the queue.
 *
 * Note: there will always be exactly one wolf in the array.
 *
 * Examples
 * Input: ["sheep", "sheep", "sheep", "wolf", "sheep"]
 * Output: "Oi! Sheep number 1! You are about to be eaten by a wolf!"
 *
 * Input: ["sheep", "sheep", "wolf"]
 * Output: "Pls go away and stop eating my sheep"
 */


// Entry data
const str1 = ["sheep", "sheep", "wolf"];
const str2 = ["wolf", "sheep", "sheep", "sheep", "sheep", "sheep", "sheep"];
const str3 = ["sheep", "sheep", "sheep", "sheep", "sheep", "wolf", "sheep", "sheep"];


// Solution 1
function warnTheSheep(queue) {
    for (let i = queue.length - 1; i >= 0; i--) {
        if (queue[i] === "wolf" && i === queue.length - 1) {
            return "Pls go away and stop eating my sheep";
        } else if (queue[i] === "wolf" && i !== queue.length - 1) {
            return `Oi! Sheep number ${queue.length - i - 1}! You are about to be eaten by a wolf!`;
        }
    }
}


// Solution 2
const warnTheSheep2 = queue => {
    let res = queue.indexOf("wolf");
    if (res === queue.length - 1) {
        return "Pls go away and stop eating my sheep"
    } else if (res !== queue.length - 1) {
        return `Oi! Sheep number ${queue.length - res - 1}! You are about to be eaten by a wolf!`;
    }
}


// Examples
console.log(warnTheSheep(str1));
console.log(warnTheSheep(str2));
console.log(warnTheSheep(str3));
console.log("----------------------------------");
console.log(warnTheSheep2(str1));
console.log(warnTheSheep2(str2));
console.log(warnTheSheep2(str3));