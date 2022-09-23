import { Link } from 'react-router-dom';
import style from './Navbar.module.css';

const Navbar = () => (
  <div className={style['navbar-wrapper']} data-testid="navbar-page">
    <h1>Book store</h1>
    <ul className={style['navbar-list']}>
      <li><Link to="/">Books</Link></li>
      <li><Link to="/categories">Categories</Link></li>
    </ul>
  </div>
);
export default Navbar;
