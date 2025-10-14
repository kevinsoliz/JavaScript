function triangulo(filas) {
    for (let i = 1; i <= filas; i++) {
        let line = "";
        for (let j = 0; j < i; j++) {
            line += "#";
        }
        console.log(line);
    }
}

triangulo(7);
console.log("hola");

function triangulo2(filas) {
    for (let i = 1; i <= filas; i++) {
        let line = "";
        let line2 = "";
        for (let j = filas; j >= i; j--) {
            line += " ";
        }
        for (let k = 0; k < i; k++) {
            line2 += "# ";
        }
        console.log(line + line2);
    }
}

triangulo2(7);

function tablero(filas, columnas) {
    for (let i = 0; i < filas; i++) {
        let line = "";

        for (let j = 0; j < columnas; j++) {

            if (i % 2 === 0)
                line += " #";
            else
                line += "# "
        }
        console.log(line);
    }
}

console.log("tablero");
tablero(8, 8);

function fizzBuzz(numeros) {
    for (let i = 1; i <= numeros; i++) {
        if (i % 3 === 0 && i % 5 === 0)
            console.log("FizzBuzz");
        else if (i % 3 === 0)
            console.log("Fizz");
        else if (i % 5 === 0)
            console.log("Buzz");
        else
            console.log(i);
    }
}

fizzBuzz(100);

//Corrección:
console.log("Resueltos");

for (let line = "#"; line.length < 8; line += "#")
    console.log(line);

for (let n = 1; n <= 100; n++) {
    let output = "";
    if (n % 3 === 0)
        output += "Fizz";
    if (n % 5 === 0)
        output += "Buzz";
    console.log(output || n);
}