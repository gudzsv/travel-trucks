import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    item: {},
  },
  reducers: {
    setFilter(state, action) {
      state.item = action.payload;
    },
    clearFilter(state) {
      state.item = [];
    },
  },
});

export const { setFilter, clearFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
