import './menu.styles.css';
import catImg1 from '../../assets/cat-1.jpg';
import catImg2 from '../../assets/cat-2.jpg';
const Menu = () => {
  return (
    <>
      <section id="menu-section">
        <div className="content-wrapper" id="menu">
          <div className="category-container">
            <div className="category">
              <img src={catImg1} alt="Chilaquiles y enchiladas" />
              <h2>ENCHILADAS</h2>
            </div>
            <div className="category-item">
              <div className="category-wrapper">
                <p className="item-name">Pídelas con salsa:</p>
                <p className="item-desc">
                  Roja / Verde / Chipotle / Habanero / Guajillo
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="content-wrapper" id="menu">
          <div className="category-container">
            <div className="category">
              <img src={catImg2} alt="Chilaquiles y enchiladas" />
              <h2>CHILAQUILES</h2>
            </div>
            <div className="category-item">
              <div className="category-wrapper">
                <p className="item-name">Pídelos con salsa:</p>
                <p className="item-desc">
                  Roja / Verde / Chipotle / Habanero / Guajillo
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Menu;
