import { Outlet } from 'react-router-dom';
import Header from '../header/header.component';
import Footer from '../footer/footer.component';

const Root = () => {
  return (
    <div className="main-container">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
