import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../../redux/categories/categories';

function Categories() {
  const dispatch = useDispatch();
  const text = useSelector((state) => state.categories);
  return (
    <div>
      <button type="submit" onClick={() => { dispatch(checkStatus()); }}>
        Check status
      </button>
      <h2>{text}</h2>
    </div>
  );
}

export default Categories;
