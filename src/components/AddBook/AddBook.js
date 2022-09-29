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
      item_id: uuidv4(),
      title,
      author,
      category: 'action',
    };
    dispatch(addBook(book));
    setTitle('');
    setAuthor('');
  };

  return (
    <div className={style['input-book']}>
      <h3 className={style['add-new-book']}>Add new book</h3>
      <form className={style.form} action="/action.php">
        <input
          className={style.title}
          type="text"
          id="title"
          value={title}
          placeholder="Book title"
          onChange={(e) => { setTitle(e.target.value); }}
        />
        <input
          className={style.author}
          type="text"
          id="author"
          value={author}
          placeholder="author"
          onChange={(e) => { setAuthor(e.target.value); }}
        />
        <button className={style.button} onClick={handleClick} type="submit">
          Add book
        </button>
      </form>
    </div>
  );
}

export default AddBook;
