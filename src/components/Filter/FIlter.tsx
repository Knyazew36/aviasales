import React, { ChangeEvent, useEffect, useState } from 'react';

import Transferred from '../Transferred/Transferred';
import Company from '../Company/Company';
import { useDispatch } from 'react-redux';
// import {
//   filteredСonnectionAmount,
//   filteredCompany,
// } from '../../store/slice/ticketsSlice';

const FIlter = () => {
  const [filtersConnection, setFiltersConnection] = useState<number[]>([]);
  const [filtersCompany, setFiltersCompany] = useState<string[]>([]);
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
    dispatch(filteredСonnectionAmount(filtersConnection));
  }, [filtersConnection]);
  useEffect(() => {
    dispatch(filteredCompany(filtersCompany));
  }, [filtersCompany]);

  return (
    <div>
      <Transferred
        handleCheckboxChange={handleCheckboxFilteredConnectionAmount}
      />
      <Company handleCheckboxChange={handleCheckboxFilteredCompany} />
    </div>
  );
};

export default FIlter;
