export function addtoWatchlist(addMovie)
{   
    if (!addMovie || typeof addMovie !== "object") {
        console.error("Invalid movie object")
        return
    }

    let localWatchList = JSON.parse(localStorage.getItem("myWatchlist")) || []
    
    const movieExists = localWatchList.some(movie => movie.imdbID === addMovie.imdbID)
    
    if (movieExists) {
      console.log("Movie already in Watchlist")
        return
    }

    localWatchList.push(addMovie)
    localStorage.setItem("myWatchlist", JSON.stringify(localWatchList))

}