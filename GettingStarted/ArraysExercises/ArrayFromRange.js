function arrayFromRange(start, end) {
    let result = [];
    let iterations = Math.abs(end) - Math.abs(start);
    for (let i = 0; i <= Math.abs(iterations); i++)
        result[i] = start + i;

    return result;
}

function arrayFrom2(min, max) {
    let result = [];
    for (let i = min; i <= max; i++)
        result.push(i);
    return result;
}

const array = arrayFrom2(4, 10);
console.log(array);

