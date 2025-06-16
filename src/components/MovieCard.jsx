import { useRef, useState, useEffect } from "react";
import { createPortal } from "react-dom";
import {
  AiOutlinePlayCircle,
  AiOutlinePlusCircle,
  AiOutlineMinusCircle,
  AiOutlineMore,
} from "react-icons/ai";

const MovieCard = ({ movieData, isInWatchlist, onToggleWatchlist }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuPosition, setMenuPosition] = useState({ top: 0, left: 0 });
  const menuRef = useRef(null);
  const moreButtonRef = useRef(null);

  const handleButtonClick = () => {
    onToggleWatchlist(movieData);
    setMenuOpen(false);
  };

  const handleMoreClick = () => {
    if (moreButtonRef.current) {
      const rect = moreButtonRef.current.getBoundingClientRect();
      const menuWidth = 192;
      const menuHeight = 120;

      let top = rect.bottom + window.scrollY;
      let left = rect.left + window.scrollX;

      if (left + menuWidth > window.innerWidth) {
        left = window.innerWidth - menuWidth - 8;
      }

      if (top + menuHeight > window.innerHeight + window.scrollY) {
        top = rect.top + window.scrollY - menuHeight;
      }

      setMenuPosition({ top, left });
      setMenuOpen(!menuOpen);
    }
  };

  // Cerrar el menú si se hace clic fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !moreButtonRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="group w-[175px] rounded-xl flex flex-col items-center bg-palette-400 shadow-md cursor-pointer relative p-2">
      <div>
        <img
          className="w-full h-full object-cover rounded-t-xl"
          src={movieData.image}
          alt={movieData.title + " Portada"}
        />
      </div>

      <div className="m-2 flex flex-row">
        <p
          className="text-white truncate w-[120px]"
          title={movieData.title}
        >
          {movieData.title}
        </p>

        <button ref={moreButtonRef} onClick={handleMoreClick} className="md:hidden">
          <AiOutlineMore size={24} />
        </button>
      </div>

      <div className="hidden md:flex opacity-0 group-hover:opacity-100 absolute inset-0 z-10 flex-col justify-center items-center gap-2 transition-opacity duration-300">
        <button className="cursor-pointer transform transition-transform duration-200 hover:scale-110 hover:text-palette-100">
          <AiOutlinePlayCircle size={40} className="md:w-12 md:h-12" />
        </button>

        <button className="cursor-pointer transform transition-transform duration-200 hover:scale-110 hover:text-green-400" onClick={handleButtonClick}>
          {isInWatchlist
          ? <AiOutlineMinusCircle size={40} className="md:w-12 md:h-12" />
          : <AiOutlinePlusCircle size={40} className="md:w-12 md:h-12" /> }
        </button>
      </div>

      {menuOpen &&
        createPortal(
          <div
            ref={menuRef}
            style={{
              position: "absolute",
              top: `${menuPosition.top}px`,
              left: `${menuPosition.left}px`,
              zIndex: 9999,
            }}
            className="bg-palette-300 shadow-lg rounded-md w-48"
          >
            <ul className="flex flex-col py-2 text-palette-200 divide-y divide-neutral-500 px-4">
              <li
                className="px-2 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => alert(`Playing ${movieData.title}`)}
              >
                Play
              </li>
              <li
                className="px-2 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => alert(`Not interested in ${movieData.title}`)}
              >
                Not Interested
              </li>
              <li
                onClick={handleButtonClick}
                className="px-2 py-2 hover:bg-gray-100 cursor-pointer"
              >
                {isInWatchlist ? "Remove from Watchlist" : "Save in Watchlist"}
              </li>
            </ul>
          </div>,
          document.body
        )}
    </div>
  );
};

export default MovieCard;
