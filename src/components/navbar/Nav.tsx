import { Link } from 'react-router-dom';
import { NavBar } from './style';

const Nav = () => {
  return (
    <NavBar>
      <img src="olympics.png" alt="" />

      <ul>
        <li>
          <Link to="/events"
        >
          Events
        </Link>
        </li>

        <li>
          <Link to="/countries">Countries</Link>
        </li>
      </ul>

      <ul>      
        <li>
          <Link to="/">Home</Link>
        </li>
        
        <li>
          <Link to="#">About</Link>
        </li>

        <li>
          <Link to="#">Contact</Link>
        </li>
      </ul>

    </NavBar>
  );
}

export default Nav;
