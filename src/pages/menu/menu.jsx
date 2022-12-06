import './menu.styles.css';

import { db } from '../../config/firebase';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { useState, useEffect } from 'react';

const Menu = () => {
  const [menus, setMenus] = useState([]);
  const [items, setItems] = useState([]);
  // const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    const menuQuery = query(collection(db, 'menu'), orderBy('order'));
    const itemQuery = query(collection(db, 'menuitems'));

    onSnapshot(menuQuery, (querySnapshot) => {
      setMenus(
        querySnapshot.docs.map((menu) => {
          return { id: menu.id, data: menu.data() };
        })
      );
    });

    onSnapshot(itemQuery, (querySnapshot) => {
      setItems(
        querySnapshot.docs.map((item) => {
          return { id: item.id, data: item.data() };
        })
      );
    });
  }, []);

  /*   const renderItems = (menuId) => {
    return items
      .filter((item) => item.data.menuId === menuId)
      .map((menuItem) => (
        <>
          <p className="item-name">{menuItem.data.title}</p>
          <p className="item-desc">{menuItem.data.description}</p>
        </>
      ));
  }; */

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
                  {items
                    .filter((item) => item.data.menuId === menu.id)
                    .map((menuItem, index) => (
                      <div key={index}>
                        <p className="item-name">{menuItem.data.title}</p>
                        <p className="item-desc">{menuItem.data.description}</p>
                      </div>
                    ))}
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
