export function renderMovie(movieContainer, movies){

    if (!movieContainer) {
        console.error("Target container not found!");
        return;
    }
    
    movieContainer.innerHTML =``
    
    movieContainer.innerHTML = movies.map(movie =>{ 
        return `<div class="movie">
        <img class="movie-poster" alt="${movie.Title}" src="${movie.Poster}" onerror="this.onerror=null; this.src='/assets/default-poster.jpg';">
        <div class="movie-text">
        <div class="title-rating">
        <h2>${movie.Title}</h2><p>⭐${movie.imdbRating}</p></div>
        <div class="runtime-genre">
        <p>${movie.Runtime}</p><p>${movie.Genre}</p>
        <button class="watchlist-btn" data-movieid="${movie.imdbID}"><img src="/assets/add.png"> Watchlist</button>
        </div>
        <p class="plot">${movie.Plot}</p>
        </div>
        </div>`

    }).join('')
}