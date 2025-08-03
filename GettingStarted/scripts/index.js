
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
function greet(nombre, lastName) {
    console.log("Hello Worldddd" + nombre + ' ' + lastName);
} //no necesitas añadir semcolon

greet('John', 'Smith'); //el argumento es el actual value we suply for that parameter
