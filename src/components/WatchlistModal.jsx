import { useEffect, useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";

const WatchlistModal = ({ onClose }) => {
  const [watchlist, setWatchlist] = useState([]);

  // Cargar la watchlist del localStorage al montar
  useEffect(() => {
    const storedList = JSON.parse(localStorage.getItem("watchlist")) || [];
    setWatchlist(storedList);
  }, []);

  const removeFromWatchList = (id) => {
    const updatedList = watchlist.filter((movie) => movie.id !== id);
    setWatchlist(updatedList);
    localStorage.setItem("watchlist", JSON.stringify(updatedList));
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-4 rounded-lg max-w-md w-full">
        <h2 className="text-lg font-semibold mb-4">Watchlist</h2>

        {watchlist.length > 0 ? (
          <ul className="space-y-2">
            {watchlist.map((movie) => (
              <li key={movie.id} className="flex justify-between items-center border-b pb-2">
                <p className="text-gray-800 truncate max-w-[200px]">{movie.title}</p>
                <button onClick={() => removeFromWatchList(movie.id)} className="text-red-500 hover:text-red-700">
                  <AiOutlineDelete size={20} />
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No hay nada en tu watchlist.</p>
        )}

        <button onClick={onClose} className="mt-4 bg-palette-200 text-white py-1 px-3 rounded">
          Cerrar
        </button>
      </div>
    </div>
  );
};

export default WatchlistModal;
