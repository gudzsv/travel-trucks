import { createSlice } from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    items: [],
  },
  reducers: {
    toggleFavorite(state, action) {
      let copyItems = [...state.items];
      if (copyItems.includes(action.payload)) {
        copyItems = copyItems.filter(item => item != action.payload);
      } else {
        copyItems.push(action.payload);
      }
      state.items = copyItems;
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;
export const favoritesReducer = favoritesSlice.reducer;
