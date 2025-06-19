import { useState } from "react";
import { AiOutlinePlaySquare, AiOutlineSetting, AiOutlineHome, AiOutlineMenu } from "react-icons/ai";
import WatchlistModal from "./WatchlistModal";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      {/* MOBILE MENU */}
      <header className="fixed bottom-0 left-0 right-0 bg-palette-300 py-1 opacity-100 border-palette-300 inset-shadow-sm z-50 md:hidden">
        <nav className="flex justify-around w-full">
          {/* BOTON INICIO */}
          <button className="text-palette-200 text-sm flex flex-col items-center">
            <AiOutlineHome size={25}/>
            <p>Home</p>
          </button>

          {/* BOTON WATCHLIST */}
          <button className="text-palette-200 text-sm flex flex-col items-center" onClick={() => setIsModalOpen(!isModalOpen)}>
            <AiOutlinePlaySquare size={25} />
            <p>WatchList</p>
          </button>

          {/* BOTON CONFIG */}
          <button className="text-palette-200 text-sm flex flex-col items-center">
            <AiOutlineSetting size={25}/>
            <p>Settings</p>
          </button>
        </nav>
      </header>

      {/* DESKTOP MENU */}
      <aside className="hidden md:flex fixed top-0 left-0 h-full w-[80px] bg-palette-100 flex-col items-center py-4 z-50 border-palette-200 justify-around">
        {/* Home */}
        <button title="Home" className="p-5 text-palette-200 flex flex-col items-center mb-6 hover:cursor-pointer">
          <AiOutlineHome size={28} />
          <span className="text-xs mt-1 md:hidden">Home</span>
        </button>

        {/* Watchlist */}
        <button title="Watchlist"
          className="p-5 text-palette-200 flex flex-col items-center mb-6 hover:cursor-pointer"
          onClick={() => setIsModalOpen(!isModalOpen)}
        >
          <AiOutlinePlaySquare size={28} />
          <span className="text-xs mt-1 md:hidden">Watch</span>
        </button>

        {/* Settings */}
        <button title="Settings" className="p-5 text-palette-200 flex flex-col items-center hover:cursor-pointer">
          <AiOutlineSetting size={28} />
          <span className="text-xs mt-1 hover:underline md:hidden">Config</span>
        </button>
      </aside>

      {
        isModalOpen && <WatchlistModal  onClose = {() => setIsModalOpen(false)} />
      }
    </>
  )
}

export default Header