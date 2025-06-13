import movies from "../api/movies.json";
import MovieCard from "./MovieCard.jsx";

const MovieList = ({ order }) => {
  return (
    <div className="w-full overflow-x-auto">
  <div className="flex flex-nowrap gap-4 px-4">
    {movies.map((movie) => (
      <MovieCard key={movie.id} movieData={movie} />
    ))}
  </div>
</div>
  )
}

export default MovieList