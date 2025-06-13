import { useState } from "react";
import { AiOutlinePlaySquare, AiOutlineSetting, AiOutlineHome, AiOutlineMenu } from "react-icons/ai";
import WatchlistModal from "./WatchlistModal";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      {/* LOGO */}
      {/* MENU HAMBURGUESA */}
      <button>
        <AiOutlineMenu/>
      </button>
      {/* BOTON INICIO */}
      <button>
        <AiOutlineHome/>
      </button>
      {/* BOTON WATCHLIST */}
      <button onClick={() => setIsModalOpen(!isModalOpen)}>
        <AiOutlinePlaySquare />
      </button>
      {/* BOTON CONFIG */}
      <button>
        <AiOutlineSetting/>
      </button>

      {
        isModalOpen && <WatchlistModal watchlist = { watchlist } onClose = {() => setIsModalOpen(false)} />
      }
    </div>
  )
}

export default Header