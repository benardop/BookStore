import { Route, Routes } from 'react-router-dom';
import style from './App.module.css';
import BookList from './components/BookList/BookList';
import Categories from './components/Categories/Categories';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className={style['app-wrapper']}>
      <Navbar />
      <Routes>
        <Route path="/" element={<BookList />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </div>
  );
}

export default App;
