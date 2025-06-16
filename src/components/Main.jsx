import MovieList from "./MovieList";
import SearchBar from "./SearchBar";
import Logo from "../assets/logo.svg"

const Main = () => {
  return (
    <>
        <main className="flex flex-col bg-palette-400 text-white">
          <div className="sticky top-0 left-0 right-0 bg-palette-100 p-2 z-50 border border-palette-100">
            <div className="flex items-center justify-between gap-4">
              {/* LOGO DENTRO DE CÍRCULO */}
              <div className="flex flex-row">
                <div className="w-12 h-12 rounded-full bg-palette-200 flex items-center justify-center">
                  <img src={Logo} alt="Logo" className="w-8 h-8" />
                </div>
                <div className="hidden md:flex">
                  <p>Kinematic</p>
                </div>
              </div>

              {/* BARRA DE BÚSQUEDA */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1/2">
                <SearchBar/>
              </div>
            </div>
          </div>

          <div className="pb-[75px]">
            <h1 className="m-5">Vistos recientemente</h1>

            {/* The Departed, Rocky, Urusei Yatsura: Beautiful Dreamer, The Godfather, Spider‑Man */}
            <MovieList order="recent"/>

            <h2 className="m-5">Podrían interesarte</h2>

            {/* Lupin III, The Ideon, End of Evangelion, 9 Reinas, Casino, Raging Bull, Spider‑Man 2 */}
            <MovieList order="interested"/>

            <h2 className="m-5">Películas - Popular </h2>

            {/* Shawshank Redemption, Psycho, Rear Window, Godfather II, North by Northwest, Sonic 3, Goodfellas, Casino  */}
            <MovieList order="moviesPopular"/>
          </div>
        </main>
    </>
  )
}

export default Main