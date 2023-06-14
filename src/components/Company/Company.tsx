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
    <div className='flex flex-col'>
      <p>Колличество пересадок</p>
      <div className='flex gap-2'>
        <p>Airlines Inc</p>
        <input
          type='checkbox'
          value='Airlines Inc.'
          onChange={(e) => handleCheckboxFilteredCompany(e)}
        />
      </div>
      <div className='flex gap-2'>
        <p>Airways Ltd</p>
        <input
          type='checkbox'
          value='Airways Ltd.'
          onChange={(e) => handleCheckboxFilteredCompany(e)}
        />
      </div>
    </div>
  );
};

export default Company;
