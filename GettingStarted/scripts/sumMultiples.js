function sumMultiples(limit) {
    let sum = 0;
    for (let i = 0; i <= limit; i++) {
        if (i % 3 === 0)
            sum += i;
        else if (i % 5 === 0)
            sum += i;
    }
    console.log(sum);
}

function sumMultiples2(limit) {
    let sum = 0;

    for (let i = 0; i <= limit; i++)
        if (i % 3 === 0 || i % 5 === 0)
            sum += i;

    return sum;
}

sumMultiples(10);
console.log(sumMultiples2(10));