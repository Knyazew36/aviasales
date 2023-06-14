import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { Ticket } from './../../model/model';

interface TicketsSlice {
  ticketsList: Ticket[];
  filteredCompany: string[];
  filteredConnectionAmount: number[];
}

const initialState: TicketsSlice = {
  ticketsList: [],
  filteredCompany: [],
  filteredConnectionAmount: [],
};

export const fetchTickets = createAsyncThunk<Ticket[]>(
  'tickets/fetchTickets',
  async () => {
    const response = await fetch('http://localhost:3000/tickets');
    const data = response.json();
    return data;
  }
);

export const ticketsSlice = createSlice({
  name: 'tickets',
  initialState,
  reducers: {
    addCompanyElement: (state, { payload }: PayloadAction<string[]>) => {
      state.filteredCompany = [...payload];
    },
    addConnectionAmountElement: (
      state,
      { payload }: PayloadAction<number[]>
    ) => {
      state.filteredConnectionAmount = [...payload];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      fetchTickets.fulfilled,
      (state, action: PayloadAction<Ticket[]>) => {
        state.ticketsList.push(...action.payload);
      }
    );
  },
});
export const { addConnectionAmountElement, addCompanyElement } =
  ticketsSlice.actions;
export default ticketsSlice.reducer;
