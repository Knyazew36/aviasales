import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../store/store';
import { fetchTickets } from '../../store/slice/ticketsSlice';

const Dashboard = () => {
  const tickets = useSelector((state: RootState) => state.tickets.ticketsList);

  const filteredCompany = useSelector(
    (state: RootState) => state.tickets.filteredCompany
  );
  const filteredConnectionAmount = useSelector(
    (state: RootState) => state.tickets.filteredConnectionAmount
  );
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTickets());
  }, [dispatch]);

  return (
    <div>
      {tickets.length &&
        tickets
          .filter((e) => {
            if (
              filteredCompany.length &&
              !filteredCompany.includes(e.company)
            ) {
              return false;
            }
            if (filteredConnectionAmount.length) {
              if (e.connectionAmount === null) {
                return false;
              }
              if (!filteredConnectionAmount.includes(e.connectionAmount)) {
                return false;
              }
            }
            return true;
          })
          .map((ticket) => (
            <div className='flex flex-col mb-4' key={ticket.id}>
              <p>Компания {ticket.company}</p>
              <p>Количество пересадок {ticket.connectionAmount}</p>
            </div>
          ))}
    </div>
  );
};

export default Dashboard;
