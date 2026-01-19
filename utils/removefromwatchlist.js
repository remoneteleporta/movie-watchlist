export function removefromWatchlist(parsedWatchlist, removeMovie, movieRemoved)
{   
    console.log(parsedWatchlist, removeMovie)
    
    localStorage.removeItem("myWatchlist")
    const newWatchList = parsedWatchlist.filter(movie => movie.imdbID !== removeMovie.imdbID)
    console.log(newWatchList)
    localStorage.setItem("myWatchlist", JSON.stringify(newWatchList))
    return newWatchList

}

