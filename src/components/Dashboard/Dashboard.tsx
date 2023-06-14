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

  const filteredCompany = useSelector((state: RootState) => state.tickets.companyFiltering)
  const connectionAmount = useSelector((state: RootState) => state.tickets.connectionAmountFiltering)

  console.log(filteredCompany)
  console.log(connectionAmount)

  const filteredTickets = tickets.filter(ticket => {
    return (
      (filteredCompany.length === 0 || filteredCompany.includes(ticket.company))
      &&
      (!connectionAmount || (ticket.connectionAmount !== null && connectionAmount.includes(ticket.connectionAmount)))
    );
  });
  return (

    <div>
      {tickets && filteredTickets.map(ticket =>
        <div className='flex flex-col mb-4' key={ticket.id}>
          <p>Компания {ticket.company}</p>
          <p>количество пересадок {ticket.connectionAmount}</p>
        </div>
      )
      }
    </div>




  );
};

export default Dashboard;
