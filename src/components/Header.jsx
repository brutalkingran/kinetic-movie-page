import { useState } from "react";
import { AiOutlinePlaySquare, AiOutlineSetting, AiOutlineHome, AiOutlineMenu } from "react-icons/ai";
import WatchlistModal from "./WatchlistModal";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <div className="right-0 left-0 bottom-0 fixed bg-black py-1 opacity-90 border-t-1 inset-shadow-sm ">
        <nav className="flex justify-around w-full">
          {/* LOGO */}
          {/* TODO: AÑADIR LOGO */}

          {/* MENU HAMBURGUESA */}
          <button className="hidden md:flex" onClick={() => setOpenMenu( !openMenu )}>
            <AiOutlineMenu size={25}/>
          </button>

          {/* BOTON INICIO */}
          <button className="mx-10 text-white text-sm/6 flex flex-col items-center">
            <AiOutlineHome size={25}/>
            <p>Home</p>
          </button>

          {/* BOTON WATCHLIST */}
          <button className="mx-10 text-white text-sm/6 flex flex-col items-center" onClick={() => setIsModalOpen(!isModalOpen)}>
            <AiOutlinePlaySquare size={25} />
            <p>WatchList</p>
          </button>

          {/* BOTON CONFIG */}
          <button className="mx-10 text-white text-sm/6 flex flex-col items-center">
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