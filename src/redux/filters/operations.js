
import { , createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers?location=Kyiv&engine=diesel&price=8500
export const applyFilters = createAsyncThunk(
  'filters/applyFilters',
  async (filters, { rejectWithValue }) => {
    try {
      const response = await axios.post('/api/apply-filters', filters);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
