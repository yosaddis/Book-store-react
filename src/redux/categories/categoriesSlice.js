import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
  message: 'Under construction',
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    checkStatus: (state) => state.message,
  },
});

export const { checkStatus } = categoriesSlice.actions;

export default categoriesSlice.reducer;
