/**
 * https://www.codewars.com/kata/570e8ec4127ad143660001fd/train/javascript
 * You can print your name on a billboard ad. Find out how much it will cost you. Each character has a default price of £30, but that 
 * can be different if you are given 2 parameters instead of 1 (allways 2 for Java).

You can not use multiplier "*" operator.

If your name would be Jeong-Ho Aristotelis, ad would cost £600. 20 leters * 30 = 600 (Space counts as a character).
 */


// Entry data
const name1 = "Zoroaster Donnchadh";
const name2 = "FfPufKJLklxpTnTsBFhXMoTkEfzTWGgwNZtEesnoLUiKifVMpMUVtSkSoI";
const name3 = "cAAHySHtZYgmfBSGiQjSgyrqzQhXw TEODMGfxJTZVAxVNXgHSWmA";


// Solution 1
const billboard = (name, price = 30) => {
    let sum = 0;

    for (let i = 0; i < name.length; i++) {
        sum += price;
    }

    return sum;
};


// Examples
console.log(billboard(name1, price = 30));
console.log(billboard(name2, price = 30));
console.log(billboard(name3, price = 30));