/**
 * Вернуть обьект, где ключи - элементы массива, значения - количество вхождения строк 
 */


// Entry data
const stringList = ["Java", "Python", "JavaScript", "Java", "JavaScript", "Python", "C#", "JavaScript"];


// Solution
const groupStrObj = arr => {
    let newObj = {};

    for (let str of arr) {
        if (newObj[str] == undefined) {
            newObj[str] = 1;
        } else {
            newObj[str]++;
        }

    }

    return newObj;
}


// Examples
console.log(groupStrObj(stringList));
