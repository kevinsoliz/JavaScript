function includes(array, searchElement) {
    let isIncluded = false;
    let contador = 0;
    while (!isIncluded && contador < array.length) {
        if (array[contador] === searchElement) {
            isIncluded = true;
        }
        contador++;
    }
    return isIncluded;
}

function includes2(array, searchElement) {
    for (let element of array)
        if (searchElement === element)
            return true;
    return false;
}

let array = [1, 2, 3, 4, 5];
console.log(includes2(array, 1));