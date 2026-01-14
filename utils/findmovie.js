let moviesList = []

export async function findMovie(movieTitle) {
    try {
        const response = await fetch(
            `https://www.omdbapi.com/?apikey=881c9de6&s=${encodeURIComponent(movieTitle)}`
        );
        const movieData = await response.json();

        if (!movieData.Search) {
            return [];

        }

        const detailPromises = movieData.Search.map(item =>
            fetch(`https://www.omdbapi.com/?apikey=881c9de6&i=${item.imdbID}`)
                .then(res => res.json())
        );

        const fullDataArray = await Promise.all(detailPromises);

        moviesList.length = 0;
        moviesList.push(...fullDataArray);

        return moviesList;
    } catch (error) {
        console.error(error);
        return [];
    }
}