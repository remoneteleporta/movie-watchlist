const movieListSection = document.getElementById("movies-list")
const searchForm = document.querySelector(".search-bar")

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
let title = document.getElementById("title-input").value
const cleantitle = DOMPurify.sanitize(title)
movieListSection.innerHTML =``
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
        return `<div class="movie">
        <img class="movie-poster" alt="${movie.Title}" src="${movie.Poster}" onerror="this.onerror=null; this.src='/assets/default-poster.jpg';">
        <div class="movie-text">
        <div class="title-rating">
        <h2>${movie.Title}</h2><p>⭐${movie.imdbRating}</p></div>
        <div class="runtime-genre">
        <p>${movie.Runtime}</p><p>${movie.Genre}</p><button id="watchlist-btn"><img src="/assets/add.png"> Watchlist</button>
        </div>
        <p class="plot">${movie.Plot}</p>
        </div>
        </div>`
    })
    
}