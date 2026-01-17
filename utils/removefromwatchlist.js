export function removefromWatchlist(parsedWatchlist, removeMovie, movieRemoved)
{   
    console.log(parsedWatchlist, removeMovie) 
    localStorage.clear()
    const newWatchList = parsedWatchlist.filter(movie => movie.imdbID !== removeMovie.imdbID)
    console.log(newWatchList)
    localStorage.setItem("myWatchlist", newWatchList)
    return newWatchList

}

