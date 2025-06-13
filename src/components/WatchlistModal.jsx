import { AiOutlineDelete } from "react-icons/ai";

const WatchlistModal = ({ watchList }) => {
  const removeFromWatchList = ( id ) => {
    const updatedList = watchlist.filter( movie => movie.id !== id);
    localStorage.setItem("watchlist", JSON.stringify(updatedList));
  }

  return (
    <div>
      <li>
        { watchList.map(( movie ) => {
          <ul key={ movie.id }>
            <div>
              <p> { movie.title } </p>
            </div>
            <div>
              <button onClick={ () => removeFromWatchList( movie.id ) }>
                <AiOutlineDelete/>
              </button>
            </div>
          </ul>
        })}
      </li>
    </div>
  )
}

export default WatchlistModal