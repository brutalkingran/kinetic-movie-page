import { useEffect, useState } from 'react'
import { AiTwotonePlayCircle, AiTwotonePlusCircle } from "react-icons/ai";

const MovieCard = ( {id, movieTitle, movieImg} ) => {
  const [watchlist, setWatchlist] = useState([]);
  const buttonStateAdd = true;

  useEffect(() => {
    const savedWatchlist = JSON.parse(localStorage.getItem("watchlist"))
    setWatchlist(savedWatchlist);
  }, []);

  const addToWatchList = ( movie ) => {
    setWatchlist([...watchlist, movie]);
    localStorage.setItem("watchlist", JSON.stringify([...watchlist, movie]));
    !buttonStateAdd
  }
  
  const removeFromWatchList = ( id ) => {
    const updatedList = watchlist.filter( movie => movie.id !== id);
    setWatchlist( updatedList );
    localStorage.setItem("watchlist", JSON.stringify(updatedList));
    !buttonStateAdd
  }

  return (
    <div key={id}>
      <div>
        <img src={movieImg} alt={movieTitle + " Portada"} />
      </div>

      <p>{ movieTitle }</p>

      <button>
        <AiTwotonePlayCircle/>
      </button>

      <button onClick={ () => buttonStateAdd ? addToWatchList(id) : removeFromWatchList(id) }>
        <AiTwotonePlusCircle />
      </button>
    </div>
  )
}

export default MovieCard;