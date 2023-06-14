import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { Ticket } from './../../model/model';

export interface TicketsSlice {
  filteredTickets: Ticket[];
  companyFiltering: string[];
  connectionAmountFiltering: number[];
}


const initialState: TicketsSlice = {
  filteredTickets: [],
  companyFiltering: [],
  connectionAmountFiltering: []
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
    addCompanyFiltering:
      (state, { payload }: PayloadAction<string[]>) => {
        state.companyFiltering = [...payload]
      },
    addConnectionAmountFiltering:
      (state, { payload }: PayloadAction<number[]>) => {
        state.connectionAmountFiltering = [...payload]
      }


  },
  extraReducers: (builder) => {
    builder.addCase(
      fetchTickets.fulfilled,
      (state, action: PayloadAction<Ticket[]>) => {
        state.filteredTickets.push(...action.payload);
      }
    );
  },
});

export const { addCompanyFiltering, addConnectionAmountFiltering } = ticketsSlice.actions
export default ticketsSlice.reducer;
