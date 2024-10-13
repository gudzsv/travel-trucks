import { createSelector } from '@reduxjs/toolkit';

export const selectLoading = state => state.camper.isLoading;

export const selectAllCampers = state => state.camper.items;

export const selectTotalCampers = state => state.camper.total;

export const selectCamperById = createSelector(
  [selectAllCampers, (state, id) => id],
  (items, id) => items.find(item => item.id === id)
);
