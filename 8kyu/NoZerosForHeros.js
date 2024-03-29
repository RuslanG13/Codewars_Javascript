/**
 * https://www.codewars.com/kata/570a6a46455d08ff8d001002/train/javascript
 * Numbers ending with zeros are boring.

 They might be fun in your world, but not here.

 Get rid of them. Only the ending ones.

 1450 -> 145
 960000 -> 96
 1050 -> 105
 -1050 -> -105
 Zero alone is fine, don't worry about it. Poor guy anyway
 */


// Entry data
const entryNum = 100500;


// Solution 1
function noBoringZeros(n) {
    let arr = n.toString().split("")

    while (arr[arr.length - 1] === "0") {
        arr.pop();
    }

    return Number(arr.join(""));
}


// Examples
console.log(noBoringZeros(entryNum));