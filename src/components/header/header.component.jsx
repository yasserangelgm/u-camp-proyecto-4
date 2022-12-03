import { Link } from 'react-router-dom';
import './header.styles.css';
import logo from '../../assets/logo.png';
import NavBar from '../navbar/navbar.component';

const Header = () => {
  return (
    <header className="main-header">
      <div className="logo-container">
        <Link to="/">
          <img src={logo} alt="Chilaquiles Rest Logo" />
        </Link>
      </div>
      <NavBar />
    </header>
  );
};

export default Header;
