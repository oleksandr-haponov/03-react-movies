import axios from 'axios'
import type { Movie } from '../types/movie'

const BASE_URL = 'https://api.themoviedb.org/3/search/movie'

export async function fetchMovies(query: string): Promise<Movie[]> {
  const response = await axios.get(BASE_URL, {
    params: { query },
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
    },
  })

  return response.data.results
}