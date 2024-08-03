import { Link, useNavigate } from 'react-router-dom';
import { NavBar } from './style';
import { useEffect, useState } from 'react';

const Nav = () => {
  const navigate = useNavigate();
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [showNav, setShowNav] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > prevScrollY) {
        
        setShowNav(false);
      } else {
        
        setShowNav(true);
      }

      setPrevScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollY]);

  return (
    <NavBar className={showNav ? 'navbar' : 'navbar nav-hider'} >
      <img src="logo_color.svg" alt=""
        onClick={
          () => navigate('/')
        }
      />
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li className='cube'>
          <Link to="/events">
            Events
          </Link>
        </li>
        <li>
          <Link to="#">Countries</Link>
        </li>
      </ul>

    </NavBar>
  );
}

export default Nav;
