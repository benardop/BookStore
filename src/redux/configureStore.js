import { combineReducers, configureStore } from '@reduxjs/toolkit';
import bookReducer from './books/books';
import catagoriesReducer from './categories/categories';

const rootReducer = combineReducers({
  books: bookReducer,
  categories: catagoriesReducer,
});
const store = configureStore({ reducer: rootReducer });

export default store;
