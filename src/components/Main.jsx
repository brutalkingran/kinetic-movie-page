import MovieList from "./MovieList"

const Main = () => {
  return (
    <>
        <div className="flex flex-col">
          <h2>VISTOS RECIENTEMENTE</h2>

          <div className="flex flex-row">
            {/* The Departed, Rocky, Urusei Yatsura: Beautiful Dreamer, The Godfather, Spider‑Man */}
            <MovieList order="recent"/>
          </div>

            <h2>PODRIAN INTERESARTE</h2>
            {/* Lupin III, The Ideon, End of Evangelion, 9 Reinas, Casino, Raging Bull, Spider‑Man 2 */}
            <MovieList order="interested"/>

            <h2> Películas - Popular </h2>
            {/* Shawshank Redemption, Psycho, Rear Window, Godfather II, North by Northwest, Sonic 3, Goodfellas, Casino  */}
            <MovieList order="moviesPopular"/>
        </div>
    </>
  )
}

export default Main