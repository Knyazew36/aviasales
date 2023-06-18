import React from 'react';
import Transferred from '../Transferred/Transferred';
import Company from '../Company/Company';

const FIlter = () => {
  return (
    <div className='flex flex-col gap-[47px] lg:flex-row'>
      <Transferred />
      <Company />
    </div>
  );
};

export default FIlter;
