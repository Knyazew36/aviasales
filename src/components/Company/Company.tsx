import React from 'react';

const Company = ({ handleCheckboxChange }) => {
  return (
    <div className='flex flex-col'>
      <p>Колличество пересадок</p>
      <div className='flex gap-2'>
        <p>Airlines Inc</p>
        <input
          type='checkbox'
          value='Airlines Inc.'
          onChange={(e) => handleCheckboxChange(e)}
        />
      </div>
      <div className='flex gap-2'>
        <p>Airways Ltd</p>
        <input
          type='checkbox'
          value='Airways Ltd.'
          onChange={(e) => handleCheckboxChange(e)}
        />
      </div>
    </div>
  );
};

export default Company;
