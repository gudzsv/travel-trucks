import { createSlice } from '@reduxjs/toolkit';
import { applyFilters } from './operations.js';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    selectedCategories: [],
    selectedPriceRange: null,
    loading: false,
    error: null,
  },
  reducers: {
    toggleCategory: (state, action) => {
      const category = action.payload;
      if (state.selectedCategories.includes(category)) {
        state.selectedCategories = state.selectedCategories.filter(
          item => item !== category
        );
      } else {
        state.selectedCategories.push(category);
      }
    },
    setPriceRange: (state, action) => {
      state.selectedPriceRange = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(applyFilters.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(applyFilters.fulfilled, (state, action) => {
        state.loading = false;
        // Обробка успішної відповіді з бекенду
      })
      .addCase(applyFilters.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { toggleCategory, setPriceRange } = filtersSlice.actions;
export default filtersSlice.reducer;
