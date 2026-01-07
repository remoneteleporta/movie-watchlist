const movieListSection = document.getElementById("movies-list")
const searchBtn = document.getElementById("search-btn")

searchBtn.addEventListener("click", ()=>{
let title = document.getElementById("title-input").value
const cleantitle = DOMPurify.sanitize(title)
findMovie(cleantitle)
})

//Find the Movie by Title
async function findMovie(movieTitle){
    await fetch(`https://www.omdbapi.com/?apikey=881c9de6&s=${movieTitle}`)
    .then(movieDetailres => movieDetailres.json())
    .then(movieData => {
        movieData.Search.forEach(async (movies) => {
            await fetch(`https://www.omdbapi.com/?apikey=881c9de6&i=${movies.imdbID}`)
            .then(movieres => movieres.json())
            .then(moviefullData => renderMovie(moviefullData))
            .catch(error => console.error(error))
        })
})
    .catch(error => console.error(error))
}

//Render Movies List
function renderMovie(movies){
    
    movieListSection.innerHTML += [movies].map(movie =>{
        return `<div class="movie"><img class="movie-poster" src="${movie.Poster}"></div>`
    })
    
}