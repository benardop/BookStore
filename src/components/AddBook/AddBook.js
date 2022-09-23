import style from './AddBook.module.css';

function AddBook() {
  return (
    <div>
      <h3>Add new book</h3>
      <form className={style.form} action="#">
        <input type="text" id="title" value="Intelligent Investor" />
        <input type="text" id="author" value="Warren Buffet" />
        <input type="submit" value="Add Book" />
      </form>
    </div>
  );
}

export default AddBook;
