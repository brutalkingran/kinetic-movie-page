import { movies } from "../utils/movies";
import { MovieCard } from "./MovieCard";

const MovieList = ({ order }) => {
  return (
    <div>
      { movies.map(( movie ) => (
        <MovieCard key = {movie.id} movieTitle = {movie.title} movieImg = {movie.image} />
      ))}
    </div>
  )
}

export default MovieList