import { createSlice } from '@reduxjs/toolkit';
import { applyFilters, fetchCampers } from './operations.js';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.items = [];
  state.isLoading = false;
  state.error = action.payload;
};

const campersSlice = createSlice({
  name: 'campers',
  initialState: {
    items: [],
    total: 0,
    isLoading: false,
    error: null,
  },
  reducers: {
    clearItems: state => {
      state.items = [];
    },
    toggleFavorite: (state, action) => {
      const { id, favorite } = action.payload;

      const camper = state.items.find(item => item.id === id);
      if (camper) {
        camper.favorite = favorite;
      }
    },
  },
  extraReducers: bundler => {
    bundler
      .addCase(fetchCampers.pending, handlePending)
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;

        state.items = action.payload.items || [];
        state.total = action.payload.total || 0;
      })
      .addCase(fetchCampers.rejected, handleRejected)
      .addCase(applyFilters.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(applyFilters.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;

        state.items = action.payload.items || [];
        state.total = action.payload.total || 0;
      })
      .addCase(applyFilters.rejected, (state, action) => {
        handleRejected(state, action);
      });
  },
  // extraReducers: bundler => {
  //   bundler
  //     .addCase(fetchCampers.pending, handlePending)
  //     .addCase(fetchCampers.fulfilled, (state, action) => {
  //       state.isLoading = false;
  //       state.error = null;

  //       const updatedItems = action.payload.items.map(newItem => {
  //         const existingItem = state.items.find(item => item.id === newItem.id);
  //         return {
  //           ...newItem,
  //           favorite: existingItem?.favorite ?? newItem.favorite ?? false,
  //         };
  //       });

  //       state.items = updatedItems;
  //       state.total = action.payload.total || 0;
  //     })
  //     .addCase(fetchCampers.rejected, handleRejected);
  // },
});

export const { clearItems } = campersSlice.actions;
export const { toggleFavorite } = campersSlice.actions;
export const campersReducer = campersSlice.reducer;
