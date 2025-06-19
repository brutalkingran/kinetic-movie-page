import movies from "../api/movies.json";
import MovieCard from "./MovieCard.jsx";

const MovieList = ({ order, watchlist, toggleWatchlist }) => {
  const allMovies = movies.all; // selecciona el elemento "all" de lista movies
  const groupIds = movies.categories[order]; // selecciona ids de categorías

  // Array de películas según categoría, añade título y portada.
  const selectedMovies = groupIds.map((id) => allMovies.find( (movie) => movie.id === id))

  return (
    <div className="w-full overflow-x-auto">
      <div className="mx-auto max-w-6xl flex flex-nowrap gap-4 px-4">
        {selectedMovies.map((movie) => (
          <MovieCard
            key={ movie.id }
            movieData={ movie }
            toggleWatchlist={ toggleWatchlist }
            isInWatchlist={ watchlist.some( (movieSelected) => movieSelected.id === movie.id) }
            onToggleWatchlist={ toggleWatchlist }
          />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
