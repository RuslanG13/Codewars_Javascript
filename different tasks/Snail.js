/**
 * «Улитка ползёт вверх по стене высотой 5 метров. Каждый день она проползает вверх на 3 метра,а каждую ночь съезжает
 * вниз на 2 метра.
 * За сколько дней она доползёт до вершины стены.»
 */


let allDistance = 5;
let currentDistance = 0;
let distancePerDay = 3;
let distancePerNight = -2;
let days = 0;

while (currentDistance < allDistance) {
    if ((currentDistance += distancePerDay) >= allDistance) {
        days++;
    } else {
        currentDistance += distancePerNight;
        days++;
    }
}

console.log(days);
