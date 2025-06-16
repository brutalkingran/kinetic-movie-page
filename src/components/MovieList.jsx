import { useEffect, useState } from "react";
import movies from "../api/movies.json";
import MovieCard from "./MovieCard.jsx";

const MovieList = ({ order }) => {
  const allMovies = movies.all;
  const groupIds = movies.categories[order] || [];
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("watchlist")) || [];
    setWatchlist(saved);
  }, []);

  const toggleWatchlist = (movie) => {
    setWatchlist((prev) => {
      const isInList = prev.some((m) => m.id === movie.id);
      const updated = isInList
        ? prev.filter((m) => m.id !== movie.id)
        : [...prev, movie];

      localStorage.setItem("watchlist", JSON.stringify(updated));
      return updated;
    });
  };

  const selectedMovies = groupIds
    .map((id) => allMovies.find((movie) => movie.id === id))
    .filter(Boolean);

  return (
    <div className="w-full overflow-x-auto flex flex-row">
      <div className="flex flex-nowrap gap-4 px-4">
        {selectedMovies.map((movie) => (
          <MovieCard
            key={movie.id}
            movieData={movie}
            toggleWatchlist={toggleWatchlist}
            isInWatchlist={watchlist.some((m) => m.id === movie.id)}
            onToggleWatchlist={toggleWatchlist}
          />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
