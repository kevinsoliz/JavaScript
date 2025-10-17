function showProperties(obj) {
    for (let key in obj)
        if (typeof obj[key] === 'string')
            console.log(key, obj[key]);

}

const movie = {
    title: "Developer",
    rate: 5,
    year: "2021",
    director: "Martin"
}

showProperties(movie);