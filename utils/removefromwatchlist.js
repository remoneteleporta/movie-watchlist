export function removefromWatchlist(parsedWatchlist, removeMovie, movieRemoved)
{   
    localStorage.removeItem("myWatchlist")
    console.log(localStorage.getItem("myWatchlist"))
    const newWatchlist = parsedWatchlist.filter(movie => movie.imdbID !== removeMovie.imdbID)
    localStorage.setItem("myWatchlist", JSON.stringify(newWatchlist))
    console.log(localStorage.getItem("myWatchlist"))
    return newWatchlist
}

