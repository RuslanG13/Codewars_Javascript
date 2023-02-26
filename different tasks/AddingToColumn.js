//'123456'
//'234556'
//'358012'


function column(str1, str2) {
    let a, b = "";
    if (str1.length > str2.length) {
        a = str1.split("").reverse().map(el => +el);
        b = str2.split("").reverse().map(el => +el);
    } else {
        b = str1.split("").reverse().map(el => +el);
        a = str2.split("").reverse().map(el => +el);
    }
    let res = [];
    let rem = 0;

    for (let i in a) {
        let elBArr = b[i];
        if (elBArr === undefined) {
            elBArr = 0;
        }
        let sum = a[i] + elBArr;

        if (sum < 9) {
            res.push(sum + rem);
            rem = 0;
        } else if (sum === 9 && rem === 0) {
            res.push(9);
        } else if (sum === 9 && rem === 1) {
            res.push(0);
        } else {
            res.push(sum - 10 + rem);
            rem = 1;
        }
    }

    if (rem === 1) {
        res.push(1);
    }

    res.reverse();

    for (let el of res) {
        if (el === 0) {
            res.shift();
        } else {
            break;
        }
    }

    return res;
}

console.log(column('123456', '234556'));