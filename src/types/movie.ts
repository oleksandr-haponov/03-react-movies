export interface Movie {
  id: number;
  poster_path: string;
  backdrop_path: string;
  title: string;
  overview: string;
  release_date: string;
  vote_average: number;
}

export interface TMDBResponse {
  page: number;
  results: Movie[];
  total_results: number;
  total_pages: number;
}