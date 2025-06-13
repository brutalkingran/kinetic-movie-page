import { useState } from "react";
import { AiOutlinePlaySquare, AiOutlineSetting, AiOutlineHome, AiOutlineMenu } from "react-icons/ai";
import WatchlistModal from "./WatchlistModal";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 bg-black py-1 opacity-90 border inset-shadow-sm z-50">
        <nav className="flex justify-around w-full">
          <div>
            {/* LOGO */}
            {/* TODO: AÑADIR LOGO */}

            {/* MENU HAMBURGUESA */}
            <button className="hidden md:flex" onClick={() => setOpenMenu( !openMenu )}>
              <AiOutlineMenu size={25}/>
            </button>
          </div>

          {/* BOTON INICIO */}
          <button className="text-white text-sm flex flex-col items-center">
            <AiOutlineHome size={25}/>
            <p>Home</p>
          </button>

          {/* BOTON WATCHLIST */}
          <button className="text-white text-sm flex flex-col items-center" onClick={() => setIsModalOpen(!isModalOpen)}>
            <AiOutlinePlaySquare size={25} />
            <p>WatchList</p>
          </button>

          {/* BOTON CONFIG */}
          <button className="text-white text-sm flex flex-col items-center">
            <AiOutlineSetting size={25}/>
            <p>Settings</p>
          </button>
        </nav>
      </div>

      {
        isModalOpen && <WatchlistModal watchlist = { watchlist } onClose = {() => setIsModalOpen(false)} />
      }
    </>
  )
}

export default Header