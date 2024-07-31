import { Outlet } from 'react-router-dom';
import Nav from '../navbar/Nav';

const LayOut = () => {
  return (
    <div>
      <Outlet />
      <Nav />
    </div>
  );
}

export default LayOut;

