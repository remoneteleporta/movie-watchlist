import{ findMovie } from '/utils/findmovie.js'
import { renderMovie } from '/utils/rendermovie.js'
import { addtoWatchlist } from '/utils/addtowatchlist.js'

const movieListSection = document.getElementById("movies-list")
const searchForm = document.querySelector(".search-bar")

searchForm.addEventListener("submit", async (e) => {
  e.preventDefault();
let title = document.getElementById("title-input").value
const cleantitle = DOMPurify.sanitize(title)

const moviesArray = await findMovie(cleantitle)

renderMovie(movieListSection, moviesArray)


movieListSection.addEventListener("click", (e) =>{

for (const movie of moviesArray) {
        if (movie.imdbID === e.target.dataset.movieid) {
            addtoWatchlist(movie);
            break;
        }
    }
})

})