import { renderMovie } from '/utils/rendermovie.js'
import { addtoWatchlist } from '/utils/addtowatchlist.js'

const movieListSection = document.getElementById("movies-list")
const searchForm = document.querySelector(".search-bar")
const newmovieAdded = document.getElementById("movie-added-msg")
const movienotAdded = document.getElementById("movie-exists-msg")

searchForm.addEventListener("submit", async (e) => {
  e.preventDefault();
let title = document.getElementById("title-input").value
const cleantitle = DOMPurify.sanitize(title)

let moviesArray = await serverHandle(cleantitle)
renderMovie(movieListSection, moviesArray)

async function serverHandle(cleantitle) {
  const res = await fetch(`/.netlify/functions/server?title=${cleantitle}`)
  const data = await res.json()
  return data
}

movieListSection.addEventListener("click", (e) =>{

for (const movie of moviesArray) {
        if (movie.imdbID === e.target.dataset.movieid) {
            addtoWatchlist(movie, newmovieAdded, movienotAdded)
            break
        }
    }
})

})