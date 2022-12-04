import './menu.styles.css';

import { db } from '../../config/firebase';
import { collection, onSnapshot, query, where } from 'firebase/firestore';
import { useState, useEffect, cloneElement } from 'react';

const Menu = () => {
  const [menus, setMenus] = useState([]);
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    const menuQuery = query(collection(db, 'menu'));
    onSnapshot(menuQuery, (querySnapshot) => {
      console.log(querySnapshot);
      setMenus(
        querySnapshot.docs.map((menu) => {
          return { id: menu.id, data: menu.data() };
        })
      );
    });
  }, []);
  //TODO: cargar los sub-elementos de cada menu en caso de existir (No se muy como modelar maestro-detalle en FireBase)
  /*     const itemsQuery = query(collection(db, 'menu'));
   */

  console.log(menus);
  return (
    <>
      <section id="menu-section">
        {menus.map((menu) => (
          <div className="content-wrapper" id="menu" key={menu.id}>
            <div className="category-container">
              <div className="category">
                <img src={menu.data.image} alt="Chilaquiles y enchiladas" />
                <h2>{menu.data.category}</h2>
              </div>
              <div className="category-item">
                <div className="category-wrapper">
                  <p className="item-name">{menu.data.optionDescription}</p>
                  <p className="item-desc">{menu.data.options}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default Menu;
