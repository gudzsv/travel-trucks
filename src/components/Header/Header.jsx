import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <nav>
      <Link to="/">TravelTrucks</Link>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/catalog">Catalog</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
