import movies from "../api/movies.json";
import MovieCard from "./MovieCard.jsx";

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