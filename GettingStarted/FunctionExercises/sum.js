function sum(...args) {
    return args.reduce((accumulator, currentValue) => accumulator + currentValue);
}

function sum2(array) {
    if (!Array.isArray(array))
        throw new Error('Array must be an array');

    return array.reduce((accumulator, currentValue) => accumulator + currentValue);
}

//Pro:

function sum3(...items) { //Porque the rest operator covierte los parámetros en un array. Entonces si pasas un array tendrias un array de arrays.
    if (items.length === 1 && Array.isArray(items[0])) {
        items = [...items[0]];
    }

    return items.reduce((a, b) => a + b);
}

try {
    console.log(sum2(1, 2, 3, 4));
} catch (e) {
    console.error(e);
}