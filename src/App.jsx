import { useEffect, useState } from 'react'
import './App.css'

const addToWatchList = ( movie ) => {
  setWatchlist([...watchlist, movie]);
  localStorage.setItem("watchlist", JSON.stringify([...watchlist, movie]));
}

const removeFromWatchList = ( id ) => {
  const updatedList = watchlist.filter( movie => movie.id !== id);
  setWatchlist( updatedList );
  localStorage.setItem("watchlist", JSON.stringify(updatedList));
}

function App() {
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    const savedWatchlist = JSON.parse(localStorage.getItem("watchlist"))
    setWatchlist(savedWatchlist);
  }, []);
  
  return (
    <>
      <Header/>
      <Main/>
    </>
  )
}

export default App
