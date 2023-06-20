import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../store/store';
import { fetchTickets } from '../../store/slice/ticketsSlice';
import Sort from '../Sort/Sort';
import { Ticket } from '../../model/model';

const Dashboard = () => {
  const [data, setData] = useState<any>([])
  const [listCount, setListCount] = useState(3)

  const tickets = useSelector((state: RootState) => state.tickets.ticketsList);
  const sortElement = useSelector((state: RootState) => state.tickets.sortedElement);

  const filteredCompany = useSelector(
    (state: RootState) => state.tickets.filteredCompany
  );
  const filteredConnectionAmount = useSelector(
    (state: RootState) => state.tickets.filteredConnectionAmount
  );
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    setData(tickets)
  }, [tickets])

  useEffect(() => {
    dispatch(fetchTickets());
  }, []);

  useEffect(() => {
    setData(tickets.filter((e) => {
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
    }))
  }, [filteredCompany, filteredConnectionAmount])

  useEffect(() => {
    switch (sortElement) {
      case 'price':
        setData([...data].sort((a, b) => a.price - b.price))
        break
      case 'time':
        setData([...data].sort((a, b) => a.duration - b.duration))
        break
      case 'optimal':
        setData([...data].sort((a, b) => {
          if (a.price === b.price) {
            return a.duration - b.duration
          }
          return a.price - b.price
        }))
        break
    }
  }, [sortElement])

  useEffect(() => {
    setData(tickets.slice(0, listCount));
  }, [listCount, tickets]);

  const buttonClickHandler = () => {
    setListCount(prev => prev + 3)
  }

  const newTickets = data
    .map((ticket: Ticket) => (
      <div className='flex flex-col p-10 pb-9 bg-[#E8EBF2] rounded-[10px] m-w-[710px] lg:m-w-full ' key={ticket.id}>
        <div>
          <p className='font-bold text-4xl text-purple-900'>{ticket.price} р</p>
        </div>
        <div className='flex justify-between mt-6'>
          <div>
            <p className='font-mediium text-base text-[#858AE3]'>{ticket.from} - {ticket.to}</p>
            <p className='font-medium text-base pt-1 text-purple-900'>{ticket.time.departure} - {ticket.time.arrival}</p>
          </div>
          <div>
            <p className='font-mediium text-base text-[#858AE3]'>В пути</p>
            <p className='font-medium text-base pt-1 text-purple-900'>{ticket.duration} часа </p>
          </div>
          <div>
            <p className='font-mediium text-base text-[#858AE3]'>Пересадки</p>
            <p className='font-medium text-base pt-1 text-purple-900'>{!ticket.connectionAmount ? 'Без пересадок' : ticket.connectionAmount}  </p>
          </div>
        </div>
      </div>
    ))
  return (
    <div className='m-w-full lg:min-w-[730px]'>
      <Sort />
      <div className='flex flex-col gap-12 mt-8'>
        {tickets.length && (newTickets.length ? newTickets : <p className='font-bold text-base text-center text-purple-900'>Список пуст</p>
        )
        }
      </div>
      <button onClick={buttonClickHandler}
        disabled={!newTickets.length}
        className={'font-bold rounded-[10px] text-2xl mt-[74px] flex justify-center py-4 text-center w-full mb-[60px]  text-[#F7F9F7] ' + (newTickets.length ? 'bg-purple-900' : 'bg-purple-100')}>Загрузить еще билеты</button>
    </div>
  );
};

export default Dashboard;
