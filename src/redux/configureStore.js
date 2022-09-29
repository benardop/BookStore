import { combineReducers, configureStore } from '@reduxjs/toolkit';
import bookReducer from './books/books';
import catagoriesReducer from './categories/categories';

const rootReducer = combineReducers({
  books: bookReducer,
  categories: catagoriesReducer,
});
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: ['books/getAllBooks//fulfilled', 'books/removeBook//fulfilled', 'books/addBook/fulfilled'],
    },
  }),
});

export default store;
