import { Link } from 'react-router-dom';
import style from './Navbar.module.css';

const Navbar = () => (
  <div className={style['navbar-wrapper']} data-testid="navbar-page">
    <ul className={style['navbar-list']}>
      <li className={style['big-font']}>Bookstore CMS</li>
      <li className={style.books}><Link to="/">Books</Link></li>
      <li className={style.categories}><Link to="/categories">Categories</Link></li>
    </ul>
  </div>
);
export default Navbar;
