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
    <div className='w-[300px] h-[300px] rounded-xl flex flex-col items-center p-2 bg-white shadow-md'>
      <div>
        <img
          className='w-full h-full object-cover rounded-t-xl'
          src={ movieData.image }
          alt={ movieData.title + " Portada"} 
        />
      </div>

      <p>{ movieData.title }</p>

      <div className='md:hidden  z-5 flex flex-col justify-center items-center opacity-75'>
        <button className="cursor-pointer">
          <AiTwotonePlayCircle size={32}/>
        </button>
        
        <button className="cursor-pointer" onClick={ () => handleButtonAddWatchlist( movieData ) }>
          { buttonStateAdd ? <AiTwotonePlusCircle size={32} /> : <AiOutlineMinusCircle size={32}/> }
        </button>
      </div>
    </div>
  )
}

export default MovieCard;