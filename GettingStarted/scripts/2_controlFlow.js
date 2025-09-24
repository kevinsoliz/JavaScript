

// for-in
const person = {
    nombre: 'kevin',
    age: 30
}

for (let key in person)
    console.log(key, person[key]);

const colors = ['red', 'green', 'blue'];
for (let index in colors)
    console.log(index, colors[index]);

// for-of
for (let color of colors)
    console.log(color);

let i = 0;
while(i <= 10){
    if(i % 2 === 0){
        i++;
        continue; //todo lo que está después se ignora.
    }
    console.log(i);
    i++;
}

//Ejercicio 1:
function maximum(a, b){
    return (a > b) ? a : b;
}

console.log(maximum(5, 5));

//Ejercicio 2:
console.log(isLandscape(1920, 1080));
function isLandscape(width, height){
    return (width > height);
}

//Ejercicio 3:
console.log(fizzBuzz(7));

/*function fizzBuzz(input) {
    if (input % 3 === 0 && input % 5 === 0) return 'FizzBuzz';
    else if (input % 3 === 0) return 'Fizz';
    else if (input % 5 === 0) return 'Buzz';
    else if(isNaN(input)) return 'Not a number';
    else return input;
    
}
*/
//Corregido : 
// Lo primero es evaluar si es un número.
function fizzBuzz(input) {
    if (typeof input !== 'number')
        return NaN;
    if ((input % 3 === 0 ) && (input % 5 === 0))
        return 'FizzBuzz';
    if (input % 3 === 0) 
        return 'Fizz';
    if (input % 5 === 0) 
        return 'Buzz';
    return input;
}