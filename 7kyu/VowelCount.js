/**
 * https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/javascript
 * Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.
 */


// Entry data
const string = "abracadabra";


// Solution 1 
const getCount = (str) => {
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u') {
            count++
        }
    }

    return count;
}


// Solution 2
const getCount2 = (str) => {
    let vowels = ["a", "e", "i", "o", "u"];
    let arrStr = str.split("");
    let count = 0;

    for (let i = 0; i < arrStr.length; i++) {
        for (let j = 0; j < vowels.length; j++) {
            if (arrStr[i] == vowels[j]) {
                count++;
            }
        }
    }

    return count;
}




// Examples
console.log(getCount(string));

console.log(getCount2(string));