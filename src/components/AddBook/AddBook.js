import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../../redux/books/books';
import style from './AddBook.module.css';

function AddBook() {
  const dispatch = useDispatch();
  const [author, setAuthor] = useState('');
  const [title, setTitle] = useState('');
  const handleClick = (e) => {
    e.preventDefault();
    const book = {
      id: uuidv4(),
      title,
      author,
    };
    dispatch(addBook(book));
    setTitle('');
    setAuthor('');
  };

  return (
    <div>
      <h3>Add new book</h3>
      <form className={style.form} action="/action.php">
        <input
          type="text"
          id="title"
          value={title}
          placeholder="title"
          onChange={(e) => { setTitle(e.target.value); }}
        />
        <input
          type="text"
          id="author"
          value={author}
          placeholder="author"
          onChange={(e) => { setAuthor(e.target.value); }}
        />
        <button onClick={handleClick} type="submit">
          Add book
        </button>
      </form>
    </div>
  );
}

export default AddBook;
