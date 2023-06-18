import React, { ChangeEvent, useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCompanyElement } from '../../store/slice/ticketsSlice';
import { RootState } from '../../store/store';

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

  const tickets = useSelector((state: RootState) => state.tickets.ticketsList);
  const companyList: string[] = [...new Set(tickets.map((el) => el.company))];
  return (
    <div className='flex flex-col bg-[#E8EBF2] lg:bg-transparent  lg:text-white rounded-[10px] p-[19px] pb-[50px]'>
      <p className=' font-bold text-[20px] text-[#4E148C]  lg:text-white pb-7'>
        Компании
      </p>
      <div className='flex flex-col gap-2'>
        {companyList.map((elem) => (
          <div className='flex gap-2' key={elem}>
            <input
              type='checkbox'
              value={elem}
              onChange={(e) => handleCheckboxFilteredCompany(e)}
              className='cursor-pointer'
            />
            <p className=' text-base text-[#858AE3] lg:text-white font-medium'>
              {elem}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Company;
