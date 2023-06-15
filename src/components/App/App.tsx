import React from 'react';
import Dashboard from '../Dashboard/Dashboard';
import Header from '../Header/Header';
import FIlter from '../Filter/FIlter';

function App() {
  return (
    <div className='flex flex-col gap-4 container margin-auto justify-between w-full m-auto'>
      <Header />
      <div className='flex gap-[50px] justify-center '>
        <div className=' flex flex-col gap-[47px] '>
          <FIlter />
        </div>
        <div>
          <Dashboard />
        </div>
      </div>
    </div>
  );
}

export default App;
