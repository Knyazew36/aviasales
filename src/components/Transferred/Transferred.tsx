import React from 'react';

const Transferred = ({ handleCheckboxChange }) => {
  return (
    <div className='flex flex-col'>
      <p>Колличество пересадок</p>
      <div className='flex gap-2'>
        <p>Одна п</p>
        <input
          type='checkbox'
          value='1'
          onChange={(e) => handleCheckboxChange(e)}
        />
      </div>
      <div className='flex gap-2'>
        <p>две п</p>
        <input
          type='checkbox'
          value='2'
          onChange={(e) => handleCheckboxChange(e)}
        />
      </div>
      <div className='flex gap-2'>
        <p>три п</p>
        <input
          type='checkbox'
          value='3'
          onChange={(e) => handleCheckboxChange(e)}
        />
      </div>
    </div>
  );
};

export default Transferred;
