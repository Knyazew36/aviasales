import React from 'react';
import Dashboard from '../Dashboard/Dashboard';
import Header from '../Header/Header';
import FIlter from '../Filter/FIlter';

function App() {
  return (
    <div className='flex flex-col margin-auto justify-center w-full m-auto items-center px-2'>
      <div className='gap-4  flex flex-col max-w-5xl lg:max-w-full'>
        <Header />
        <div className='flex gap-[50px] justify-center '>
          <div className=' hidden flex-col gap-[47px] lg:flex '>
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
