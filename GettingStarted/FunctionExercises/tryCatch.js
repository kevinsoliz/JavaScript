function countOccurrences(array, searchElement) {
    if (!Array.isArray(array))
        throw new Error("Array should be an array");

    return array.reduce((accumulator, currentValue) => {
        const occurrence = currentValue == searchElement ? 1 : 0;
        return accumulator + occurrence;
    }, 0)
}

try {
    const numbers = [1, 2, 3, 4, 5, 6];
    const count = countOccurrences(null, 1);
    console.log(count);
} catch (e) {
    console.log(e.message);
}