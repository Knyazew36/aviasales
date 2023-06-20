import React, { ChangeEvent, useEffect } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCompanyElement } from '../../store/slice/ticketsSlice';
const Company = () => {
  const [filtersCompany, setFiltersCompany] = useState<string[]>([]);
  const dispatch = useDispatch();
  const handleCheckboxFilteredCompany = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    let updatedFilters: string[] = [...filtersCompany];

    if (checked) {
      updatedFilters.push(value);
    } else {
      updatedFilters = updatedFilters.filter((e) => e !== value);
    }
    setFiltersCompany(updatedFilters);
  };
  useEffect(() => {
    dispatch(addCompanyElement(filtersCompany));
  }, [filtersCompany]);

  return (
    <div className='flex flex-col bg-[#E8EBF2] rounded-[10px] p-[19px] pb-[50px]'>
      <p className=' font-bold text-[20px] text-[#4E148C] pb-7'>Компании</p>
      <div className='flex flex-col gap-2'>
        <div className='flex gap-2'>
          <input
            type='checkbox'
            value='Airlines Inc.'
            onChange={(e) => handleCheckboxFilteredCompany(e)}
            className='cursor-pointer'
          />
          <p className=' text-base text-[#858AE3] font-medium'>Airlines Inc</p>
        </div>
        <div className='flex gap-2'>
          <input
            type='checkbox'
            value='Airways Ltd.'
            onChange={(e) => handleCheckboxFilteredCompany(e)}
            className='cursor-pointer'
          />
          <p className=' text-base text-[#858AE3] font-medium'>Airways Ltd</p>
        </div>
      </div>
    </div>
  );
};

export default Company;
