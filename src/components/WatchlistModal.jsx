import { useEffect, useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

const WatchlistModal = ({ onClose }) => {
  const [watchlist, setWatchlist] = useState([]);

  // UseEffect cumple misma función que el que se encuentra en Main.jsx
  useEffect(() => {
    const storedList = JSON.parse(localStorage.getItem("watchlist")) || [];
    setWatchlist(storedList);
  }, []);

  const removeFromWatchList = ( id ) => {
    const updatedList = watchlist.filter((movie) => movie.id !== id);

    // Actualizamos watchlist con elemento borrado
    setWatchlist(updatedList);
    // Actualizamos localstorage
    localStorage.setItem("watchlist", JSON.stringify(updatedList));
  };

  return (
    <div className="pt-15 fixed inset-0 bg-black/80 flex justify-center items-center z-50">
      {/* Contenedor del modal */}
      <div className="bg-white rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto p-4 shadow-xl">
        <div className="flex flex-row justify-between items-center">
          <h2 className="text-lg font-semibold text-palette-300">Watchlist</h2>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-full text-black hover:bg-palette-300 hover:text-white transition cursor-pointer"
          >
            <AiOutlineClose size={16} />
          </button>
        </div>

        {/* Verifica que watchlist tenga al menos una película */}
        {watchlist.length > 0 ? (
          <ul className="space-y-2">
            { watchlist.map((movie) => (
              <li
                key={movie.id}
                className="flex items-center justify-between gap-2 border-b pb-2"
              >
                {/* Miniatura */}
                <img
                  src={movie.image}
                  alt={movie.title}
                  className="w-12 h-16 object-cover rounded"
                />

                {/* Título */}
                <p className="text-gray-800 flex-1 text-center truncate px-2">
                  {movie.title}
                </p>

                {/* Botón de eliminar */}
                <button
                  onClick={() => removeFromWatchList(movie.id)}
                  className="text-red-500 hover:text-red-700 cursor-pointer"
                  title="Eliminar"
                >
                  <AiOutlineDelete size={22} />
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No hay nada en tu watchlist.</p>
        )}
      </div>
    </div>
  );
};

export default WatchlistModal;
