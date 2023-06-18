import React, { useState } from 'react';
import Sort from '../Sort/Sort';
import FIlter from '../Filter/FIlter';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

const Select = () => {
  const [selectActive, setSelectActive] = useState(false);
  const companyList = useSelector(
    (state: RootState) => state.tickets.filteredCompany
  );
  const connectionAmountList = useSelector(
    (state: RootState) => state.tickets.filteredConnectionAmount
  );
  const selectClickHandle = () => {
    setSelectActive((prev) => !prev);
  };
  return (
    <div className='lg:block hidden mt-3 '>
      <div
        className={
          'bg-purple-900  py-4 flex justify-between px-6 ' +
          (selectActive ? 'rounded-t-[10px]' : 'rounded-[10px]')
        }
      >
        <div className='flex items-center gap-2'>
          <p className='text-[16px] font-medium text-white'>
            {companyList.length ? companyList : 'Любая авиакомпания '}
          </p>
          <p className='text-[16px] font-medium text-white'>
            {connectionAmountList.length
              ? `Выбранное колличество пересадок: ${connectionAmountList}`
              : 'Любое количество пересадок '}
          </p>
        </div>
        <button onClick={selectClickHandle} className='cursor-pointer'>
          <p className=' font-medium text-[12px] font-medium text-white'>
            Открыть настройки
          </p>
        </button>
      </div>
      <div
        className={
          'bg-purple-900 rounded-b-[10px] transition-all ' +
          (selectActive ? 'h-auto opacity-100' : 'h-0 opacity-0')
        }
      >
        <FIlter />
      </div>
    </div>
  );
};

export default Select;
