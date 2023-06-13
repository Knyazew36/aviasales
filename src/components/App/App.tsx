import React from 'react';
import Dashboard from '../Dashboard/Dashboard';
import Header from '../Header/Header';
import FIlter from '../Filter/FIlter';

function App() {
  return (
    <div className='flex flex-col gap-4'>
      <Header />
      <div className='flex gap-[50px]'>
        <div className=' flex flex-col gap-[47px]'>
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
