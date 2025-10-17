function showStars(stars) {
    for (let i = 0; i <= stars; i++) {
        let row = "";

        for (let j = 0; j < i; j++)
            row += '*';

        console.log(row);
    }
}

showStars(5);