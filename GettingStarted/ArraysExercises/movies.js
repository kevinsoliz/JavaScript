const movies = [
    {title: 'a', year: 2018, rating: 4.5},
    {title: 'b', year: 2018, rating: 4.7},
    {title: 'c', year: 2018, rating: 3},
    {title: 'd', year: 2017, rating: 4.5}
];

//Print all the movies in 2018 with rating > 4
//sort by their rating
//descending order
//Pick the title
let bestMovies = [];
for (let element of movies) {
    if (element.year === 2018 && element.rating > 4)
        bestMovies.push(element.rating);
}

bestMovies.reverse();


for (let rate of bestMovies) {
    for (let movie of movies) {
        if (movie.rating === rate && movie.year === 2018) {
            console.log(movie.title);
        }
    }
}

// Pro:
const titles = movies
    .filter(m => m.year === 2018 && m.rating >= 4) // devuelve array por eso es chainable.
    .sort((a, b) => a.year - b.year) // como son objetos, necesitamos una función comparador
    .reverse() //orden descendente
    .map(m => m.title); //solo queremos los titulos.

console.log("Titulos: " + titles);