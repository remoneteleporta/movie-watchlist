import { renderWatchlist } from '../utils/renderwatchlist.js'
import { removefromWatchlist } from '../utils/removefromwatchlist.js'

const parsedWatchlist = JSON.parse(localStorage.getItem("myWatchlist"))

const watchListSection = document.getElementById("watch-list")
const movieRemoved = document.getElementById("movie-remove-msg")

document.addEventListener("DOMContentLoaded", ()=> renderWatchlist(watchListSection))

watchListSection.addEventListener("click", (e)=> {
    for (const movie of parsedWatchlist) {
            if (movie.imdbID === e.target.dataset.movieid) {
                const newWatchlist = removefromWatchlist(parsedWatchlist, movie, movieRemoved)
                renderWatchlist(watchListSection, newWatchlist)
                break
            }
        }
    })
