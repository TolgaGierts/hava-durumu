import Header from '../components/ui/header';
import { Outlet } from 'react-router-dom';

const Root = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
export default Root;
