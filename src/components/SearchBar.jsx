import { Flex, Input } from 'antd';
import { div } from 'framer-motion/client';

const SearchBar = () => (
  <div className='m-2 rounded-2xl bg-white'>
    <Flex vertical gap={12} color='#ffffff'>
      <Input.Search placeholder="Search anything..." variant="filled" className='text-white'/>
    </Flex>
  </div>
);

export default SearchBar;