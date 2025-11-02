let array = [10, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(getMax3(array));


function getMax(array) {
    let max = 0;
    for (let element of array) {
        if (element > max) {
            max = element;
        }
    }
    return max;

}

function getMax2(array) {
    if (array.length === 0) return undefined;
    return array.reduce((max, element) => {
        if (element > max)
            max = element;
        return max;
    })
}

//pro:
function getMax3(array) {
    if (array.length === 0) return undefined;
    return array.reduce((a, b) => a > b ? a : b);
}

