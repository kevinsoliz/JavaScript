// Speed LImit = 70
// 5 -> 1 point
// Math.floor(1.3) -> 1
// 12 points -> suspended

//checkSpeed(130);

function checkSpeed(speed) {

    const SPEED_LIMIT = 70;
    speed = speed - SPEED_LIMIT;
    points = Math.floor(speed / 5);
    if (points >= 12)
        console.log('License suspended');

    else if (points > 0 && points < 12)
        console.log('Points: ', points);

    else
        console.log('Ok');
}

function checkSpeed2(speed) {
    const speedLimit = 70;
    const kmPerPoint = 5;

    if (speed < speedLimit + kmPerPoint) {
        console.log('Ok');
        return;
    }

    const points = Math.floor((speed - speedLimit) / kmPerPoint);
    if (points >= 12)
        console.log('License suspended');
    else
        console.log('Points: ', points);

}

checkSpeed(74);
checkSpeed2(74);

// speed, por cada 5 km un punto, con 12 puntos licencia suspendida.
//  operacion = puntos totales
// Math.floor(speed / 5) = puntos.
