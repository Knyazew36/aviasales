import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { Ticket } from './../../model/model';

interface TicketsSlice {
  originalTickets: Ticket[];
  filteredTickets: Ticket[];
}

const initialState: TicketsSlice = {
  originalTickets: [],
  filteredTickets: [],
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
    filteredСonnectionAmount: (
      state,
      { payload }: PayloadAction<(number | null)[]>
    ) => {
      if (
        payload.length === 0 ||
        payload.includes(null) ||
        state.filteredTickets.length === 0
      ) {
        state.filteredTickets = state.originalTickets;
      } else {
        state.filteredTickets = state.originalTickets.filter((e) =>
          payload.includes(e.connectionAmount)
        );
      }
    },
    filteredCompany: (state, { payload }: PayloadAction<(string | null)[]>) => {
      if (
        (payload.length === 0 || payload.includes(null)) &&
        state.filteredTickets.length === 0
      ) {
        state.filteredTickets = state.originalTickets;
      } else {
        state.filteredTickets = state.originalTickets.filter((e) =>
          payload.includes(e.company)
        );
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      fetchTickets.fulfilled,
      (state, action: PayloadAction<Ticket[]>) => {
        state.filteredTickets.push(...action.payload);
        state.originalTickets.push(...action.payload);
      }
    );
  },
});

export default ticketsSlice.reducer;
export const { filteredСonnectionAmount, filteredCompany } =
  ticketsSlice.actions;
