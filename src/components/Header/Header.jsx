import { Link, NavLink } from 'react-router-dom';
import Container from '../Container/Container.jsx';
import styles from './Header.module.css';
import Icon from '../Icon/Icon.jsx';

const activeClass = ({ isActive }) => {
  return isActive ? styles.active : styles.link;
};

const Header = () => (
  <header className={styles.header}>
    <Container>
      <nav className={styles.headerNav}>
        <Link to="/">
          <Icon iconName="logo" width={136} height={16} ariaLabel="Home" />
        </Link>
        <ul className={styles.headerNavList}>
          <li>
            <NavLink to="/" exact="true" className={activeClass}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/catalog" className={activeClass}>
              Catalog
            </NavLink>
          </li>
        </ul>
      </nav>
    </Container>
  </header>
);

export default Header;
