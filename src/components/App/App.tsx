import React from 'react';
import Dashboard from '../Dashboard/Dashboard';
import Header from '../Header/Header';
import FIlter from '../Filter/FIlter';

function App() {
  return (
    <div className='flex justify-center w-full'>
      <div className='flex flex-col gap-4 margin-auto justify-between w-[1060px] px-4'>
        <Header />
        <div className='flex justify-between gap-8 '>
          <div className=' flex lg:hidden flex-col gap-[47px] max-w-[250px] '>
            <FIlter />
          </div>
          <div className='w-full'>
            <Dashboard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
