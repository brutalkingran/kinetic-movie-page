import { useEffect, useState } from 'react'
import { AiTwotonePlayCircle, AiTwotonePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";

const MovieCard = ( { movieData } ) => {
  const [watchlist, setWatchlist] = useState( [] );
  const [buttonStateAdd, setbuttonStateAdd] = useState(true)

  useEffect(() => {
    const savedWatchlist = JSON.parse(localStorage.getItem( "watchlist" ));
    setWatchlist(savedWatchlist ? savedWatchlist : []);
  }, []);

  const addToWatchList = ( movie ) => {
    setWatchlist([...watchlist, movie]);
    localStorage.setItem("watchlist", JSON.stringify([...watchlist, movie]));
  }
  
  const removeFromWatchList = ( id ) => {
    const updatedList = watchlist.filter( movie => movie.id !== id);
    setWatchlist( updatedList );
    localStorage.setItem("watchlist", JSON.stringify(updatedList));
  }

  const handleButtonAddWatchlist = ( movieData ) => {
    buttonStateAdd ? addToWatchList( movieData ) : removeFromWatchList( movieData );
    setbuttonStateAdd(!buttonStateAdd);
  }

  return (
    <div >
      <div>
        <img src={ movieData.image } alt={ movieData.title + " Portada"} />
      </div>

      <p>{ movieData.title }</p>

      <button>
        <AiTwotonePlayCircle/>
      </button>
      
      <button className="cursor-pointer" onClick={ () => handleButtonAddWatchlist( movieData ) }>
        { buttonStateAdd ? <AiTwotonePlusCircle /> : <AiOutlineMinusCircle/> }
      </button>
    </div>
  )
}

export default MovieCard;