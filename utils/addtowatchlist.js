export function addtoWatchlist(addMovie, newmovieAdded, movienotAdded)
{   
    if (!addMovie || typeof addMovie !== "object") {
        console.error("Invalid movie object")
        return
    }
    
    let localWatchList = JSON.parse(localStorage.getItem("myWatchlist")) || []
    
    const movieExists = localWatchList.some(movie => movie.imdbID === addMovie.imdbID)
    
    if (movieExists) {
        movienotAdded.style.visibility = 'visible'
        setTimeout(()=>{movienotAdded.style.visibility = 'hidden'}, 2000)
        return
    }else{
    localWatchList.push(addMovie)
    localStorage.setItem("myWatchlist", JSON.stringify(localWatchList))
    newmovieAdded.style.visibility = 'visible'
    setTimeout(()=>{newmovieAdded.style.visibility = 'hidden'}, 2000)
    }
}