import { v4 as uuidv4 } from 'uuid';

export const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';
export const ADD_BOOK = 'bookstore/books/ADD_BOOK';

const initialState = [
  {
    id: uuidv4(),
    completed: false,
    title: 'You Can Win',
    author: 'Shiv Khera',
  },
  {
    id: uuidv4(),
    completed: false,
    title: 'Think Positively',
    author: 'Shiv Khera',
  },
  {
    id: uuidv4(),
    completed: false,
    title: 'The Intelligent Investor',
    author: 'Warren Buffet',
  },
  {
    id: uuidv4(),
    completed: false,
    title: 'Becoming A Leader',
    author: 'Dr. Miles Munroe',
  },
];

export default function bookReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_BOOK: return [
      ...state,
      {
        id: action.id,
        title: action.title,
        author: action.author,
        completed: false,
      },
    ];

    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.id);
    default: return state;
  }
}

export const addBook = (book) => ({
  type: ADD_BOOK,
  id: book.id,
  title: book.title,
  author: book.author,
});

export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  id,
});
