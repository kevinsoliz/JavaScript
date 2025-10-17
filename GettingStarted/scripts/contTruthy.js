function countTruthy(array) {
    let truthyElements = 0;
    for (let element of array)
        if (element)
            truthyElements++;
    return truthyElements;
}

let array = ["", 1, 2, 0, false, "hey"];
console.log(countTruthy(array));
