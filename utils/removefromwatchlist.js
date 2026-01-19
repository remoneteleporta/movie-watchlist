export function removefromWatchlist(parsedWatchlist, removeMovie, movieRemoved)
{   
    localStorage.removeItem("myWatchlist")
    const newWatchlist = parsedWatchlist.filter(movie => movie.imdbID !== removeMovie.imdbID)
    localStorage.setItem("myWatchlist", JSON.stringify(newWatchlist))
    movieRemoved.style.visibility = 'visible'
    setTimeout(()=>{movieRemoved.style.visibility = 'hidden'}, 1000)
    return newWatchlist
}

