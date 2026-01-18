import { findMovie } from "../../utils/findmovie.js"

export async function handler(event) {
  const apiKey = process.env.OMDB_API_KEY
  const title = event.queryStringParameters.title

  const movie = await findMovie(title, apiKey)

  return {
    statusCode: 200,
    body: JSON.stringify(movie),
  };
}