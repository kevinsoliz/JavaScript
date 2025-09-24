// Speed LImit = 70
// 5 -> 1 point
// Math.floor(1.3) -> 1
// 12 points -> suspended
checkSpeed(180);
function checkSpeed(speed){
    const speedLimit = 70;
    let points = 0;
    if(points >= 12)
        console.log('License suspended');

    if (speed > speedLimit && (speed % 5) === 0){
        points += 1;
        console.log('Points: ', points);
    }
    else if(speed <= speedLimit || points <= 12)
        console.log('Ok');
}