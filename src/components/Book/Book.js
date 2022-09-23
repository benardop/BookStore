import React from 'react';
import PropTypes from 'prop-types';
import style from './Book.module.css';

function Book(props) {
  const { title, author } = props;
  return (
    <div className={style['book-wrapper']}>
      <div>
        <h1>{title}</h1>
        <h2>{author}</h2>
      </div>
      <button type="submit">Delete</button>
    </div>
  );
}
Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,

};

export default Book;
