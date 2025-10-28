function countOccurrences(array, searchElement) {
    let occurrences = 0;
    if (array.includes(searchElement)) {

        for (let element of array) {
            if (element === searchElement)
                occurrences++;
        }
    }
    return occurrences;
}

function countOccurrences2(array, searchElement) {
    let occurrences = array.reduce((accumulator, currentValue) => {
        if (searchElement === currentValue)
            return accumulator += 1;

        else return accumulator;
    }, 0);
    return occurrences;
}

function countOccurrences3(array, searchElement) {
    return array.reduce((accumulator, currentValue) => {
        const occurrence = (currentValue === searchElement) ? 1 : 0;
        return accumulator + occurrence;
    }, 0);
}

array = [1, 2, 3, 4, 5, 3];
console.log(countOccurrences2(array, 3));

