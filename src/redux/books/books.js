import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';
const apiKey = 'g7dj58UKgU7fzx0rJuTx';

export const getBooks = createAsyncThunk(
  'books/getAllBooks/',
  async () => {
    try {
      return axios.get(`${baseUrl}/apps/${apiKey}/books/`);
    } catch (error) {
      return error;
    }
  },
);

export const addBook = createAsyncThunk(
  'books/addBook',
  async (book) => {
    try {
      return axios.post(`${baseUrl}/apps/${apiKey}/books`, book);
    } catch (error) {
      return error;
    }
  },
);

export const removeBook = createAsyncThunk('books/removeBook/', async (id) => {
  try {
    return axios.delete(`${baseUrl}/apps/${apiKey}/books/${id}`);
  } catch (error) {
    return error;
  }
});

const initialState = [];

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getBooks.fulfilled, (state, action) => {
      const books = Object.keys(action.payload.data).map((key) => {
        const book = action.payload.data[key][0];

        return {
          id: key,
          ...book,
        };
      });
      return books;
    });

    builder.addCase(addBook.fulfilled, (state, action) => {
      const newBook = {
        id: action.meta.arg.item_id,
        title: action.meta.arg.title,
        author: action.meta.arg.author,
      };
      state.push(newBook);
      return state;
    });

    builder.addCase(removeBook.fulfilled, (state, action) => {
      const newState = state.filter((book) => book.id !== action.meta.arg);
      return newState;
    });
  },
});

export default booksSlice.reducer;
