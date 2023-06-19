import React, { ChangeEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addConnectionAmountElement } from '../../store/slice/ticketsSlice';
import { RootState } from '../../store/store';

const Transferred = () => {
  const [filtersConnection, setFiltersConnection] = useState<any>([]);
  const dispatch = useDispatch();

  const handleCheckboxFilteredConnectionAmount = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    const { value, checked } = e.target;

    let updatedFilters: Array<number | null> = [...filtersConnection];

    if (value === '') {
      if (checked) {
        updatedFilters.push(...[null]);
      } else {
        updatedFilters = updatedFilters.filter((e) => e !== +value);
      }
    }

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

  const tickets = useSelector((state: RootState) => state.tickets.ticketsList);
  const connectionAmountList = [
    ...new Set(tickets.map((el) => el.connectionAmount)),
  ];

  const formatConnectionsText = (elem: number | null): string => {
    if (elem === null) return 'Без пересадок';
    if (elem === 1) return '1 пересадка';
    if (elem >= 2 && elem <= 4) return `${elem} пересадки`;
    if (elem >= 5 && elem <= 8) return `${elem} пересадок`;
    return '';
  };

  return (
    <div className='flex flex-col bg-[#E8EBF2] lg:bg-transparent rounded-[10px] p-[19px] pb-[50px]'>
      <p className=' font-bold text-[20px] text-[#4E148C] lg:text-white pb-7'>
        Колличество пересадок
      </p>
      <div className='flex flex-col gap-2'>
        {connectionAmountList.map((elem) => (
          <div className='flex gap-2' key={elem}>
            <input
              type='checkbox'
              value={elem ? elem : ''}
              onChange={(e) => handleCheckboxFilteredConnectionAmount(e)}
              id='check1'
              className='cursor-pointer'
            />
            <p className=' text-base text-[#858AE3] lg:text-white font-medium'>
              {formatConnectionsText(elem)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Transferred;
