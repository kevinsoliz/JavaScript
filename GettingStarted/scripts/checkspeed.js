// Speed LImit = 70
// 5 -> 1 point
// Math.floor(1.3) -> 1
// 12 points -> suspended

checkSpeed(130);

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

// speed, por cada 5 km un punto, con 12 puntos licencia suspendida.
//  operacion = puntos totales
// Math.floor(speed / 5) = puntos.
