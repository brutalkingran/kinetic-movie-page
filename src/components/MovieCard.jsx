import { useEffect, useState, useRef } from 'react';
import { createPortal } from 'react-dom';
import { AiTwotonePlayCircle, AiTwotonePlusCircle, AiOutlineMinusCircle, AiOutlineMore } from "react-icons/ai";

const MovieCard = ({ movieData }) => {
  const [watchlist, setWatchlist] = useState([]);
  const [buttonStateAdd, setbuttonStateAdd] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuPosition, setMenuPosition] = useState({ top: 0, left: 0 });
  const menuRef = useRef(null);
  const moreButtonRef = useRef(null);

  useEffect(() => {
    const savedWatchlist = JSON.parse(localStorage.getItem("watchlist"));
    setWatchlist(savedWatchlist ? savedWatchlist : []);
  }, []);

  const addToWatchList = (movie) => {
    const updated = [...watchlist, movie];
    setWatchlist(updated);
    localStorage.setItem("watchlist", JSON.stringify(updated));
  };

  const removeFromWatchList = (id) => {
    const updatedList = watchlist.filter((movie) => movie.id !== id);
    setWatchlist(updatedList);
    localStorage.setItem("watchlist", JSON.stringify(updatedList));
  };

  const handleButtonAddWatchlist = (movieData) => {
    buttonStateAdd ? addToWatchList(movieData) : removeFromWatchList(movieData.id);
    setbuttonStateAdd(!buttonStateAdd);
    setMenuOpen(false); // Cerrar menú después de acción
  };

  // Posicionar el menú basado en el botón
  const handleMoreClick = () => {
    if ( moreButtonRef.current ) {
      const rect = moreButtonRef.current.getBoundingClientRect();
      const menuWidth = 192; // = 48 * 4 (tailwind w-48 = 12rem = 192px)
      const menuHeight = 120; // Aproximado. Puedes ajustar según el contenido
  
      let top = rect.bottom + window.scrollY;
      let left = rect.left + window.scrollX;
  
      // Evita desbordamiento horizontal
      if (left + menuWidth > window.innerWidth) {
        left = window.innerWidth - menuWidth - 8; // 8px padding de margen
      }
  
      // Evita desbordamiento vertical
      if (top + menuHeight > window.innerHeight + window.scrollY) {
        top = rect.top + window.scrollY - menuHeight; // abre hacia arriba
      }
  
      setMenuPosition({ top, left });
      setMenuOpen(!menuOpen);
    }
  };
  

  // Cerrar el menú si se hace clic fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target) && !moreButtonRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className='w-[175px] rounded-xl flex flex-col items-center bg-palette-400 shadow-md cursor-pointer relative p-2'>
      <div>
        <img
          className='w-full h-full object-cover rounded-t-xl'
          src={movieData.image}
          alt={movieData.title + " Portada"}
        />
      </div>

      <div className='m-2 flex flex-row'>
      <p className='text-white truncate w-[120px]' title={movieData.title}>
        {movieData.title}
      </p>

        <button
          ref={moreButtonRef}
          onClick={handleMoreClick}
          className='md:hidden'
        >
          <AiOutlineMore size={24} />
        </button>
      </div>

      <div className='md:opacity-0 md:hover:opacity-75 md:hover:flex z-5 text-white flex flex-col justify-center items-center'>

        <button className="hidden md:flex cursor-pointer">
          <AiTwotonePlayCircle size={32} />
        </button>

        <button className="hidden md:flex cursor-pointer" onClick={() => handleButtonAddWatchlist(movieData)}>
          {buttonStateAdd ? <AiTwotonePlusCircle size={32} /> : <AiOutlineMinusCircle size={32} />}
        </button>
      </div>

      { menuOpen &&
        createPortal(
          <div
            ref={menuRef}
            style={{
              position: "absolute",
              top: `${menuPosition.top}px`,
              left: `${menuPosition.left}px`,
              zIndex: 9999
            }}
            className="bg-palette-300 shadow-lg rounded-md w-48"
          >
            <ul className="flex flex-col py-2 text-palette-200 divide-y divide-neutral-500 px-4">
              <li className="px-2 py-2 hover:bg-gray-100 cursor-pointer" onClick={() => alert(`Playing ${movieData.title}`)}>
                Play
              </li>
              <li className="px-2 py-2 hover:bg-gray-100 cursor-pointer" onClick={() => alert(`Not interested in ${movieData.title}`)}>
                Not Interested
              </li>
              <li
                onClick={() => handleButtonAddWatchlist(movieData)}
                className="px-2 py-2 hover:bg-gray-100 cursor-pointer"
              >
                {buttonStateAdd ? "Save in Watchlist" : "Remove from Watchlist"}
              </li>
            </ul>
          </div>,
          document.body
        )
      }

    </div>
  );
};

export default MovieCard;
