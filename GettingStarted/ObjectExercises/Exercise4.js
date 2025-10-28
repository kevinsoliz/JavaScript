const blogPost = {
    title: "HollyDays",
    body: "Im going on vacation mothefucher",
    author: "Keni",
    views: 970,
    comments: [
        {author: "Diego", body: "Aeeeajd"},
        {author: "Pweo", body: "Sweden"}
    ],
    isLive: false
}

//console.log(blogPost);
/*
function Post(title, body, author, views, comments, isLive, published) {
    this.title = title;
    this.body = body;
    this.author = author;
    this.views = views;
    this.comments = comments;
    this.isLive = isLive;
    this.published = published;
}

const pos1 = new Post("Sandias",
    "hey",
    "kein",
    2899,
    [{author: "Diego", body: "Aeeeajd"}, {author: "Pweo", body: "Sweden"}],
    false,
    true);
*/
function Post(title, author, body) {
    this.title = title;
    this.author = author;
    this.body = body;
    this.views = 0;
    this.comments = [];
    this.isLive = false; //Porque, nadie lo ha visto aún, no hay comentarios y aún no se ha publicado. 
}

console.log(pos1);