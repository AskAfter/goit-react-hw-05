import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png';
import s from './Navigation.module.css';
import clsx from 'clsx';
const buildLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};
const Navigation = () => {
  return (
    <header className={s.header}>
      <Link to="/" className={s.logoContainer}>
        <img className={s.logo} src={logo} alt="MovieSearch logo" />
        <p className={s.logoText}>MovieTime</p>
      </Link>

      <nav className={s.nav}>
        <ul className={s.list}>
          <li>
            <NavLink to="/" className={buildLinkClass}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/movies" className={buildLinkClass}>
              Movies
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Navigation;
