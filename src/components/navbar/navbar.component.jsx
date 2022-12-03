import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import './navbar.styles.css';

const NavBar = () => {
  const [burguerClass, setBurguerClass] = useState('menu-btn unclicked');
  const [menuClass, setMenuClass] = useState('menu hidden');
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurguerClass('menu-btn clicked');
      setMenuClass('menu visible');
    } else {
      setBurguerClass('menu-btn unclicked');
      setMenuClass('menu hidden');
    }
    setIsMenuClicked(!isMenuClicked);
  };

  return (
    <nav>
      <div className={burguerClass} onClick={updateMenu}>
        <span></span>
      </div>

      <ul className={menuClass}>
        <li className="link">
          <NavLink to="/menu" onClick={updateMenu}>
            Menu
          </NavLink>
        </li>
        <li className="link">
          <NavLink to="/order" onClick={updateMenu}>
            Ordena
          </NavLink>
        </li>
        <li className="link">
          <NavLink onClick={updateMenu}>Reserva</NavLink>
        </li>
        <li className="link">
          <NavLink onClick={updateMenu}>Contacto</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
