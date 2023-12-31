import React from 'react';

const Header = () => {
  return (
    <div className='flex gap-8 items-center mt-[84px]  lg:justify-center '>
      <img src='./logo.png' alt='logo' />
      <p className='font-bold text-2xl  text-[#4E148C] lg:hidden'>
        Поиск авибаилетов
      </p>
    </div>
  );
};

export default Header;
