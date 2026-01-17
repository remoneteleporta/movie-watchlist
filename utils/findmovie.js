let moviesList = []

export async function findMovie(movieTitle, apiKey) {
    try {
        const response = await fetch(
            `https://www.omdbapi.com/?apikey=${apiKey}&s=${encodeURIComponent(movieTitle)}`
        );
        const movieData = await response.json();

        if (!movieData.Search) {
            return [];

        }

        const detailPromises = movieData.Search.map(item =>
            fetch(`https://www.omdbapi.com/?apikey=${apiKey}&i=${item.imdbID}`)
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