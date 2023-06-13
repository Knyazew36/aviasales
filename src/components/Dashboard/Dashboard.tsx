import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTickets } from '../../store/slice/ticketsSlice';
import { RootState, AppDispatch } from '../../store/store';
import { Ticket } from '../../model/model';

const Dashboard = () => {
  const tickets = useSelector(
    (state: RootState) => state.tickets.filteredTickets
  );
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTickets());
  }, [dispatch]);

  return (
    <div>
      {tickets.length &&
        tickets.map((ticket) => (
          <div className='flex flex-col mb-4' key={ticket.id}>
            <p>Компания {ticket.company}</p>
            <p>количество пересадок {ticket.connectionAmount}</p>
          </div>
        ))}
    </div>
  );
};

export default Dashboard;
