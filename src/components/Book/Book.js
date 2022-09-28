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
        <h1>{title}</h1>
        <h2>{author}</h2>
      </div>
      <button type="submit" onClick={handleClick}>Delete</button>
    </div>
  );
}
Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,

};

export default Book;
