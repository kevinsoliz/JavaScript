function showPrimes(limit) {
    for (let i = 2; i <= limit; i++) {
        let divisores = 0;
        for (let j = 2; j < i; j++) {
            if (i % j === 0)
                divisores++;
        }
        if (divisores === 0)
            console.log(i);
    }
}

function showP2(limit) {
    for (let number = 2; number <= limit; number++)
        if (isPrime(number))
            console.log(number);
}

//Esto estaba dentro de la función de arriba en modo de bucle bidimensional, casi siempre que veas esto (nestedloop) significa que puedes extraer el segundo bucle en una función.
function isPrime(number) {
    for (let factor = 2; factor < number; factor++)
        if (number % factor === 0)
            return false;
    return true;
}

showP2(4);