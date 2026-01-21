export function renderWatchlist(watchlistContainer, parsedWatchlist){
    console.log(parsedWatchlist)
    
    if(parsedWatchlist === null || parsedWatchlist.length < 0){
      watchlistContainer.innerHTML = `<div class="watchlist-empty-msg"><p>Your Watchlist is looking a little empty...</p>
      <a href="/"><img src="/assets/add.png">Let's add some movies!</a></div>`
    }
else{
    watchlistContainer.innerHTML = parsedWatchlist.map(movie =>{ 
        return `<div class="movie">
        <img class="movie-poster" alt="${movie.Title}" src="${movie.Poster}" onerror="this.onerror=null; this.src='/assets/default-poster.jpg';">
        <div class="movie-text">
        <div class="title-rating">
        <h2>${movie.Title}</h2><p>⭐${movie.imdbRating}</p></div>
        <div class="runtime-genre">
        <p>${movie.Runtime}</p><p>${movie.Genre}</p>
        <button class="remove-btn" data-movieid="${movie.imdbID}"><img src="/assets/remove.png">Remove</button>
        </div>
        <p class="plot">${movie.Plot}</p>
        </div>
        </div>`

    }).join('')}
}