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
//Strict Equality (Type + Value)
console.log(1 === 1);
console.log('1' === 1);

//Lose Equality (ignora el tipo, solo evalúa el value)
console.log(1 == 1)
console.log('1' == 1) //automáticamente convertira el valor derecho a String
console.log(true == 1) //lo convierte a boolean

//Ternary operator
// If  a customer has more than 100 points, 
// they are a 'gold' customer, otherwise,
// they are a 'sileve' customer.

let points = 110;
let type = points > 100 ? 'gold' : 'silver';

console.log(type);

//Logical Operators
let highIncome = true;
let goodCredtiScore = true;
let eligibleForLoan = highIncome && goodCredtiScore;
console.log(eligibleForLoan);

//NOT (!)
let applicationsRefused = !eligibleForLoan;
console.log(eligibleForLoan)

//Logical op. with non booleans!
console.log(false || true);
console.log(false || 'Kevin');
console.log(false || 1);
//Cuando el motor de javascript evalúa esta lógica va a interpretar essos
//non booleans como truthy o -falsy: undefined, null, 0, false, '', NaN-
//todo lo que no es falsy es truthy.

//short-circuiting
console.log(false || 1 || 2);
//devuelve 1 porque es el primer valor truthy que encuentra.
//Ejemplo real:

let userColor = undefined;
let defaultColor = 'blue';
let currentColor = userColor || defaultColor; //Si tenemos un valor del usuario usamos ese, si no, el default
console.log(currentColor);

switch (prompt("Cómo está el clima?")) {
    case "lluvioso":
        console.log("Llevate paraguas");
        break;
    case "soleado":
        console.log("Vistete ligerito");
        break;
    case "nublado":
        console.log("Sal al exteriosr");
        break;
    default:
        console.log("No se encuentra el clima");
        break;
}