import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addSort } from '../../store/slice/ticketsSlice';

const Sort = () => {
  const [buttonActive, setButtonActive] = useState('');
  const dispatch = useDispatch();

  const clickButtonHandle = (e) => {
    const id = e.target.id;
    dispatch(addSort(id));
    setButtonActive(e.target.id);
  };

  return (
    <div
      className='w-full grid grid-cols-3'
      onClick={(e) => clickButtonHandle(e)}
    >
      <button
        id='price'
        className={
          'py-[18px] border border-purple-900 font-bold text-base text-center text-purple-900 bg-[#E8EBF2] rounded-l-lg ' +
          (buttonActive === 'price' ? 'bg-purple-900 text-white' : '')
        }
      >
        Самый дешевый
      </button>
      <button
        id='time'
        className={
          'py-[18px] border border-purple-900 font-bold text-base text-center text-purple-900 bg-[#E8EBF2] ' +
          (buttonActive === 'time' ? 'bg-purple-900 text-white' : '')
        }
      >
        Самый быстрый
      </button>
      <button
        id='optimal'
        className={
          'py-[18px] border border-purple-900 font-bold text-base text-center text-purple-900 bg-[#E8EBF2] rounded-r-lg ' +
          (buttonActive === 'optimal' ? 'bg-purple-900 text-white' : '')
        }
      >
        Самый оптимальный
      </button>
    </div>
  );
};

export default Sort;
