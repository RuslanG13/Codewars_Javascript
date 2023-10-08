/**
 * There are pillars near the road. The distance between the pillars is the same and the width of the pillars is the same. 
 * Your function accepts three arguments:

1. number of pillars (≥ 1);
2. distance between pillars (10 - 30 meters);
3. width of the pillar (10 - 50 centimeters).
Calculate the distance between the first and the last pillar in centimeters (without the width of the first and last pillar).

 it("Testing for number of pillars: 11, distance: 15 m and width: 30 cm", function(){
    assert.strictEqual(pillars(11, 15, 30) , 15270);
  });
 */


// Entry data  
const numberPillars = 11;
const distanceBetwPillars = 15;
const widthOfPillar = 30;


// Solution 1
function pillars(numPill, dist, width) {
    let distCentimets = dist * 100;
    let distanceBetweenPills = 0;
    if (numPill <= 1) {
        return 0;
    }

    for (let i = 1; i <= numPill; i++) {
        if (i === 1) {
            continue;
        }
        distanceBetweenPills += distCentimets + width;
    }

    return distanceBetweenPills - width;
}


// Examples
console.log(pillars(numberPillars, distanceBetwPillars, widthOfPillar));