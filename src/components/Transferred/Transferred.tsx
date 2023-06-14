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
    <div className='flex flex-col'>
      <p>Колличество пересадок</p>
      <div className='flex gap-2'>
        <p>Одна п</p>
        <input
          type='checkbox'
          value='1'
          onChange={(e) => handleCheckboxFilteredConnectionAmount(e)}
        />
      </div>
      <div className='flex gap-2'>
        <p>две п</p>
        <input
          type='checkbox'
          value='2'
          onChange={(e) => handleCheckboxFilteredConnectionAmount(e)}
        />
      </div>
      <div className='flex gap-2'>
        <p>три п</p>
        <input
          type='checkbox'
          value='3'
          onChange={(e) => handleCheckboxFilteredConnectionAmount(e)}
        />
      </div>
    </div>
  );
};

export default Transferred;
