import React, { ChangeEvent, useEffect, useState } from 'react';

import Transferred from '../Transferred/Transferred';
import Company from '../Company/Company';
import { useDispatch } from 'react-redux';

const FIlter = () => {
  return (
    <div>
      <Transferred />
      <Company />
    </div>
  );
};

export default FIlter;
