import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook } from '../../redux/books/books';
import style from './Book.module.css';

function Book(props) {
  const { title, author, id } = props;
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(removeBook(id));
  };
  return (
    <div className={style['book-wrapper']}>
      <div>
        <h1 className={style.catagory}>Action</h1>
        <h1 className={style.title}>{title}</h1>
        <h2 className={style.author}>{author}</h2>
        <div className={style['inner-dev']}>
          <button type="submit">Comment</button>
          <div className={style.bar} />
          <button type="submit" onClick={handleClick}>Remove</button>
          <div className={style.bar} />
          <button type="submit">Edit</button>
        </div>
      </div>
      <div className={style.per}>
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="rgb(52,144,226)">
            <path d="M222.7 32.1c5 16.9-4.6 34.8-21.5 39.8C121.8 95.6 64 169.1 64 256c0 106 86 192 192 192s192-86 192-192c0-86.9-57.8-160.4-137.1-184.1c-16.9-5-26.6-22.9-21.5-39.8s22.9-26.6 39.8-21.5C434.9 42.1 512 140 512 256c0 141.4-114.6 256-256 256S0 397.4 0 256C0 140 77.1 42.1 182.9 10.6c16.9-5 34.8 4.6 39.8 21.5z" />
          </svg>
        </div>
        <div>
          <h4 className={style.persent}>98%</h4>
          <p className={style.completed}>Completed</p>
        </div>
        <div className={style['long-bar']} />
        <div className={style['last-dev']}>
          <p className={style['current-chapter']}>Current chapter</p>
          <p className={style['chapter-10']}>chapter 10</p>
          <button type="submit" className={style['update-progress']}>UPDATE PROGRESS</button>
        </div>
      </div>

    </div>
  );
}
Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,

};

export default Book;
