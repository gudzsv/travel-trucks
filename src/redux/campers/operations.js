import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io',
  headers: { 'content-type': 'application/json', 'Cache-Control': 'no-cache' },
});

const defaultParams = {
  page: 1,
  limit: 4,
};

export const fetchCampers = createAsyncThunk(
  'campers/fetchAll',
  async (customParams = {}, { rejectWithValue }) => {
    try {
      const params = { ...defaultParams, ...customParams };
      const { data } = await apiClient.get('/campers', {
        params,
      });

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
