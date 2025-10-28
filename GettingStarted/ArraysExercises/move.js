function move(array, index, offset) {
    let arrayCopy = [...array];
    let posDisponibles = array.length - 1;
    let posDerecha = posDisponibles - index;
    let posIzquierda = index;
    let respuesta = "Offset it's out of range";

    if (offset >= -posIzquierda && offset <= posDerecha) {
        let element = array[index];
        arrayCopy.splice(index, 1);
        arrayCopy.splice(index + offset, 0, element);
        respuesta = arrayCopy;
    }
    return respuesta;
}

//Pro: 
function move2(array, index, offset) {
    const position = index + offset;
    if (position < 0 || position >= array.length) {
        console.error('Invalid offset');
        return;
    }

    const output = [...array];
    const element = output.splice(index, 1)[0]; // Porque devuelve un array con el elemento o elementos borrados
    output.splice(position, 0, element);
    return output;
}

array = [1, 2, 3, 4, 5];

console.log(move(array, 0, 4));