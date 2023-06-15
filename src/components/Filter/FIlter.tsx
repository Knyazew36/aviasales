import React, { ChangeEvent, useEffect, useState } from 'react';

import Transferred from '../Transferred/Transferred';
import Company from '../Company/Company';
import { useDispatch } from 'react-redux';

const FIlter = () => {
  return (
    <div className='flex flex-col gap-[47px]'>
      <Transferred />
      <Company />
    </div>
  );
};

export default FIlter;
