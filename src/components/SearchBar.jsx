import { Flex, Input } from 'antd';
import { div } from 'framer-motion/client';
import Logo from "../assets/logo.svg"

const SearchBar = () => (
  <div className="sticky top-0 left-0 right-0 bg-palette-100 p-2 z-50 border border-palette-100">
    <div className="flex items-center justify-between gap-4">
      {/* LOGO */}
      <div className="flex flex-row items-center gap-2 cursor-pointer">
        <div className="w-12 h-12 rounded-full bg-palette-200 flex items-center justify-center">
          <img src={Logo} alt="Logo" className="w-8 h-8" />
        </div>

        <div className="hidden md:flex items-center">
          <p className="text-lg font-semibold">Kinematic</p>
        </div>
      </div>

      {/* BARRA DE BÚSQUEDA */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-1/2">
        <div className='m-2 rounded-2xl bg-white'>
          <Flex vertical gap={12} color='#ffffff'>
            <Input.Search placeholder="Search anything..." variant="filled" className='text-white'/>
          </Flex>
        </div>
      </div>
    </div>
  </div>
);

export default SearchBar;