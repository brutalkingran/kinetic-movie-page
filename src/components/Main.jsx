import { useEffect, useState } from "react";
import MovieList from "./MovieList";
import SearchBar from "./SearchBar";

const Main = () => {
  const [watchlist, setWatchlist] = useState([]);

  // Lectura de LocalStorage, en caso de null será array vacío []
  useEffect( () => {
    const saved = JSON.parse(localStorage.getItem("watchlist")) || [];
    setWatchlist(saved);
  }, []); // solo se ejecuta cuando componente entra al DOM

  // Agrega/quita películas de acuerdo a si ya está en la lista
  const toggleWatchlist = (movie) => {
    const current = JSON.parse(localStorage.getItem("watchlist")) || [];
  
    const isInList = current.some((m) => m.id === movie.id);
    const updated = isInList
      ? current.filter((m) => m.id !== movie.id)
      : [...current, movie];
  
    localStorage.setItem("watchlist", JSON.stringify(updated));
    setWatchlist(updated); // actualizar estado local también
  };
  

  return (
    <>
      <main className="flex flex-col bg-palette-400 text-white">
        {/* MENU TOP */}
        <SearchBar/>

        {/* CONTENIDO */}
        <div className="pb-[75px]">
          {/* FILA 1 PELÍCULAS RECIENTES */}
          <div className="flex flex-row m-5 justify-between items-center">
            <h1 className="text-3xl md:ml-[100px]">Vistos recientemente</h1>
            <a href="#" className="hover:underline mr-10">Ver más</a>
          </div>
          <MovieList order="recent" watchlist={watchlist} toggleWatchlist={toggleWatchlist} />

          {/* FILA 2 PODRIAN INTERESARTE */}
          <div className="flex flex-row m-5 justify-between items-center">
            <h1 className="text-3xl md:ml-[100px]">Podrían interesarte</h1>
            <a href="#" className="hover:underline mr-10">Ver más</a>
          </div>
          <MovieList order="interested" watchlist={watchlist} toggleWatchlist={toggleWatchlist} />

          {/* FILA 3 PELÍCULAS POPULARES */}
          <div className="flex flex-row m-5 justify-between items-center">
            <h1 className="text-3xl md:ml-[100px]">Películas - Popular </h1>
            <a href="#" className="hover:underline mr-10">Ver más</a>
          </div>
          <MovieList order="moviesPopular" watchlist={watchlist} toggleWatchlist={toggleWatchlist} />

          {/* FILA N ... */}
        </div>
      </main>
    </>
  )
}

export default Main