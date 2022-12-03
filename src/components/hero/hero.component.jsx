import './hero.styles.css';
import mobileImg from '../../assets/hero-mobile.jpg';
import LinkButton from '../linkbutton/linkbutton.component';
const Hero = () => {
  return (
    <>
      <main>
        <div className="content-wrapper">
          <div className="hero">
            <img
              src={mobileImg}
              alt="Chilaquiles dish"
              className="mobile-img"
            />
            <div className="hero-text">
              <h1>¿Quieres probar algo delicioso?</h1>
              <LinkButton color="#ffca0c" path="/order" text="Ordena ahora" />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Hero;
