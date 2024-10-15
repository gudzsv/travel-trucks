import { createSlice } from '@reduxjs/toolkit';
import { fetchCamper, fetchCampers } from './operations.js';

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.items = [];
  state.isLoading = false;
  state.error = action.payload;
};

const handleFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.items = action.payload.items || [];
  state.total = action.payload.total || 0;
};

const campersSlice = createSlice({
  name: 'campers',
  initialState: {
    items: [],
    total: 0,
    isLoading: false,
    error: null,
  },

  extraReducers: bundler => {
    bundler
      .addCase(fetchCampers.pending, handlePending)
      .addCase(fetchCampers.fulfilled, handleFulfilled)
      .addCase(fetchCampers.rejected, handleRejected)

      .addCase(fetchCamper.pending, handlePending)
      .addCase(fetchCamper.fulfilled, handleFulfilled)
      .addCase(fetchCamper.rejected, handleRejected);
  },
});

export const { clearItems, toggleFavorite } = campersSlice.actions;
export const campersReducer = campersSlice.reducer;
