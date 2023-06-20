import React from 'react';

const Header = () => {
  return <div className=' gap-8 items-center mt-[84px] flex'>
    <img src="./logo.png" alt="logo" />
    <p className='font-bold text-2xl text-[#4E148C] hidden lg:block'>Поиск авибаилетов</p>
  </div>;
};

export default Header;
