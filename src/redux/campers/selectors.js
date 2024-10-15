import { createSelector } from '@reduxjs/toolkit';

export const selectLoading = state => state.campers.isLoading;

export const selectError = state => state.campers.error;

export const selectAllCampers = state => state.campers.items;

export const selectTotalCampers = state => state.campers.total;

export const selectCamperById = createSelector(
  [selectAllCampers, (state, id) => id],
  (items, id) => items.find(item => item.id === id)
);
