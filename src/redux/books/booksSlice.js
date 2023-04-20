import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [],
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, { payload }) => {
      state.books.push({
        name: payload.name,
        author: payload.author,
        id: payload.id,
      });
    },
    removeBook: (state, { payload }) => {
      state.books.filter((book) => book.id !== payload.id);
    },
  },
});

export const { addBook, removeBook } = booksSlice.actions;

export default booksSlice.reducer;
