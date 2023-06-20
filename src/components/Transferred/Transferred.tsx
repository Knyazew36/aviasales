import React, { ChangeEvent, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addConnectionAmountElement } from '../../store/slice/ticketsSlice';

const Transferred = () => {
  const [filtersConnection, setFiltersConnection] = useState<number[]>([]);
  const dispatch = useDispatch();

  const handleCheckboxFilteredConnectionAmount = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    const { value, checked } = e.target;
    let updatedFilters: number[] = [...filtersConnection];

    if (checked) {
      updatedFilters.push(+value);
    } else {
      updatedFilters = updatedFilters.filter((e) => e !== +value);
    }
    setFiltersConnection(updatedFilters);
  };

  useEffect(() => {
    dispatch(addConnectionAmountElement(filtersConnection));
  }, [filtersConnection]);

  return (
    <div className='flex flex-col bg-[#E8EBF2] rounded-[10px] p-[19px] pb-[50px]'>
      <p className=' font-bold text-[20px] text-[#4E148C] pb-7'>Колличество пересадок</p>
      <div className='flex flex-col gap-2'>
        <div className='flex gap-2'>
          <input
            type='checkbox'
            value='1'
            onChange={(e) => handleCheckboxFilteredConnectionAmount(e)}
            id='check1'
            className='cursor-pointer'
          />
          <p className=' text-base text-[#858AE3] font-medium'>Одна пересадка</p>
        </div>
        <div className='flex gap-2'>
          <input
            type='checkbox'
            value='2'
            onChange={(e) => handleCheckboxFilteredConnectionAmount(e)}
            id='check1'
            className='cursor-pointer'
          />
          <p>две п</p>
        </div>
        <div className='flex gap-2'>
          <input
            type='checkbox'
            value='3'
            onChange={(e) => handleCheckboxFilteredConnectionAmount(e)}
            className='cursor-pointer'
          />
          <p>три п</p>
        </div>
      </div>
    </div>
  );
};

export default Transferred;
