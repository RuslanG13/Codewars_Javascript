/**
 * https://www.codewars.com/kata/5b4e779c578c6a898e0005c5/train/javascript
 * Given a number n, draw stairs using the letter "I", n tall and n wide, with the tallest in the top left.

For example n = 3 result in:

"I\n I\n  I"
or printed:

I
 I
  I
Another example, a 7-step stairs should be drawn like this:

I
 I
  I
   I
    I
     I
      I
 */


// Entry data
const steps = 5;


// Solution 1 
const drawStairs = (n) => {
    let str = `I\n`;

    for (let i = 2; i <= n; i++) {
        for (let j = 1; j < i; j++) {
            str += " "
        }
        str += "I\n";
    }

    return str;
}

// Solution 2
const drawStairs2 = (n) => {
    let str = "I";

    if (n == 1) {
        return str;
    } else {
        str += "\n";
    }

    for (let i = 2; i <= n; i++) {
        for (let j = 1; j < i; j++) {
            str += " "
        }

        if (i < n) {
            str += "I\n";
        } else {
            str += "I";
        }
    }

    return str;
}


// Examples
console.log(drawStairs(steps));
console.log(drawStairs2(steps));