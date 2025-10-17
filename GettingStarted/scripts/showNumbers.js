function showNumbers(number) {
    let mensaje;
    for (let i = 0; i <= number; i++) {
        if (i % 2)
            mensaje = "\"ODD\"";
        else
            mensaje = "\"EVEN\"";

        console.log(i, mensaje);
    }
}

function showNumbers2(number) {
    let mensaje;
    for (let i = 0; i <= number; i++) {
        const message = (i % 2) ? 'ODD' : 'EVEN';
        console.log(i, message);
    }
}

showNumbers(10);
showNumbers2(10);
