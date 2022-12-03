import { Outlet } from 'react-router-dom';
import Header from '../header/header.component';
import Footer from '../footer/footer.component';

const Root = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Root;
