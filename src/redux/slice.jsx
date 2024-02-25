import { createSlice } from '@reduxjs/toolkit';
import { fetchCars } from './operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const carsInitialState = {
  items: [],
  isLoading: false,
  error: null,
};

const carsSlice = createSlice({
  name: 'adverts',
  initialState: carsInitialState,
  extraReducers: builder => {
    builder
      .addCase(fetchCars.pending, handlePending)
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchCars.rejected, handleRejected);
  },
});

export const carsReducer = carsSlice.reducer;
