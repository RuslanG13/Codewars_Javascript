/**
 * https://www.codewars.com/kata/53af2b8861023f1d88000832/train/javascript
 *
 * Create a function which answers the question "Are you playing banjo?".
 * If your name starts with the letter "R" or lower case "r", you are playing banjo!
 *
 * The function takes a name as its only argument, and returns one of the following strings:
 * name + " plays banjo"
 * name + " does not play banjo"
 *
 * Names given are always valid strings.
 */


// Solution 1
function areYouPlayingBanjo(name) {
    return name[0].toLowerCase().startsWith('r') ? name + " plays banjo" : name + " does not play banjo";
}

// Solution 2
function areYouPlayingBanjo2(name) {
    return (name.startsWith("R") || name.startsWith("r")) ? name + " plays banjo" : name + " does not play banjo";
}

// Solution3
function areYouPlayingBanjo3(name) {
    if(name.startsWith("R") || name.startsWith("r")) {
        return name + " plays banjo";
    } else {
        return name + " does not play banjo";
    }
}


//Examples
console.log(areYouPlayingBanjo("Ruslan"));
console.log(areYouPlayingBanjo("ruslan"));
console.log('------------------------------')
console.log(areYouPlayingBanjo2("Oleg"));
console.log(areYouPlayingBanjo2("aleksandr"));


