function except(array, anotherArray) {

    for (let element of anotherArray) {
        if (array.includes(element)) {
            let indice = array.indexOf(element);
            array.splice(indice, 1);
        }
    }
    return array;
}

function except2(array, anotherArray) {
    let output = [];

    for (let element of array)
        if (!anotherArray.includes(element))
            output.push(element);

    return output;
}

let array = [1, 2, 3, 4, 5, 3];
let anotherArray = [1, 2, 3];
//console.log(except(array, anotherArray));

console.log(except2(array, anotherArray));