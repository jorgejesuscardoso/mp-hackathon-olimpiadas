import { Outlet } from 'react-router-dom';
import Nav from '../navbar/Nav';
import Footer from '../footer/Footer';

const LayOut = () => {
  return (
    <div>
      <Outlet />
      <Nav />
      <Footer />
    </div>
  );
}

export default LayOut;

