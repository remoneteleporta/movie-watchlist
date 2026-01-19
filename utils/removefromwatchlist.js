export function removefromWatchlist(parsedWatchlist, removeMovie, movieRemoved)
{   
    localStorage.removeItem("myWatchlist")
    const newWatchList = parsedWatchlist.filter(movie => movie.imdbID !== removeMovie.imdbID)
    localStorage.setItem("myWatchlist", JSON.stringify(newWatchList))
    return
}

