import { useEffect, useState } from "react";
import MovieList from "./MovieList";
import SearchBar from "./SearchBar";
import Logo from "../assets/logo.svg"

const Main = () => {
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

  return (
    <>
      <main className="flex flex-col bg-palette-400 text-white">
        <div className="sticky top-0 left-0 right-0 bg-palette-100 p-2 z-50 border border-palette-100">
          <div className="flex items-center justify-between gap-4">
            {/* LOGO DENTRO DE CÍRCULO */}
            <div className="flex flex-row items-center gap-2">
              <div className="w-12 h-12 rounded-full bg-palette-200 flex items-center justify-center">
                <img src={Logo} alt="Logo" className="w-8 h-8" />
              </div>
              <div className="hidden md:flex items-center">
                <p className="text-lg font-semibold">Kinematic</p>
              </div>
            </div>

            {/* BARRA DE BÚSQUEDA */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1/2">
              <SearchBar/>
            </div>
          </div>
        </div>

        <div className="pb-[75px]">
          <div className="flex flex-row m-5 justify-between items-center">
            <h1 className="text-3xl ml-[100px]">Vistos recientemente</h1>
            <a href="#" className="hover:underline mr-10">Ver más</a>
          </div>
          <MovieList order="recent" watchlist={watchlist} toggleWatchlist={toggleWatchlist} />

          <div className="flex flex-row m-5 justify-between items-center">
            <h1 className="text-3xl ml-[100px]">Podrían interesarte</h1>
            <a href="#" className="hover:underline mr-10">Ver más</a>
          </div>
          <MovieList order="interested" watchlist={watchlist} toggleWatchlist={toggleWatchlist} />

          <div className="flex flex-row m-5 justify-between items-center">
            <h1 className="text-3xl ml-[100px]">Películas - Popular </h1>
            <a href="#" className="hover:underline mr-10">Ver más</a>
          </div>
          <MovieList order="moviesPopular" watchlist={watchlist} toggleWatchlist={toggleWatchlist} />
        </div>
      </main>
    </>
  )
}

export default Main