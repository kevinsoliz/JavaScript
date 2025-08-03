
// null es un objeto
//Crear un object:
let person = {
    nombre: "Kevin",
    age: 30
}; //Object Literal. Necesitamos dos Keys
typeof person;


//Dot notation
person.age = 32;

// Bracket Notation
person['nombre'] = 'Mary';
//por defecto usa el punto pero si quieres que el usuario acceda a uno de los valores:
let selection = "nombre";
person[selection] = 'Manuela'
console.log(person.nombre);

//Arrays:
let selectedColors = ['red', 'blue']; //Array Literal, el length y el tipo pueden cambiar en runtime.
selectedColors[2] = 'green';
console.log(selectedColors.length); //Un array es un data structure que usamos para representar una lista de items. 

//Functions
//Performing a task
function greet(nombre, lastName) {
    console.log("Hello Worldddd" + nombre + ' ' + lastName);
} //no necesitas añadir semcolon

// Calculating a value
function square(number) {
    return number * number;
}

let number = square(2);
console.log(number);

//Operators

let x = 10;
let y = 3;
/*
console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y); //reminder
console.log(x ** y); //Potencias: x elevado a y.
*/

// Increment (++)
console.log(++x); //primero se incrementa y luego muestra el valor, si lo pones después, primero ves x y luego incrementa

// Decrement (--)
console.log(x--);
console.log(x);

//Assigment operators

let n = 10;
n += 5; //Additional assigment operator.

//Comparison operators
//Relational operators
console.log(n > 20);
console.log(x >= 1);
console.log(x < 1);
console.log(x <= 1);

//Equality 
console.log(x === 1); //igual que
console.log(x !== 1);
