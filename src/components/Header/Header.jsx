import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

const Header = () => {
  return (
    <header>
      <nav>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? `${s.navLink} ${s.active}` : s.navLink
          }
        >
          Shop
        </NavLink>
        <NavLink
          to="/shop-cart"
          className={({ isActive }) =>
            isActive ? `${s.navLink} ${s.active}` : s.navLink
          }
        >
          Shopping Cart
        </NavLink>
        <NavLink
          to="/history"
          className={({ isActive }) =>
            isActive ? `${s.navLink} ${s.active}` : s.navLink
          }
        >
          History
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
