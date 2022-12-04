import { useRef } from 'react';
import './slide.styles.css';

import img1 from '../../assets/promo-1.jpg';
import img2 from '../../assets/promo-2.jpg';
import img3 from '../../assets/promo-3.jpg';

const Slide = ({ promos }) => {
  const slideshow = useRef(null);

  const goToNext = () => {
    //Javascript puro y duro pero no quedaba de otra para evitar el renderizado de React
    if (slideshow.current.children.length > 0) {
      const firstSlide = slideshow.current.children[0];
      const slideWidth = slideshow.current.children[0].offsetWidth;
      slideshow.current.style.transition = `300ms ease-out all`;
      slideshow.current.style.transform = `translateX(-${slideWidth}px)`;
      const transition = () => {
        slideshow.current.style.transition = 'none';
        slideshow.current.style.transform = `translateX(0)`;
        slideshow.current.appendChild(firstSlide);
        slideshow.current.removeEventListener('transitionend', transition);
      };

      slideshow.current.addEventListener('transitionend', transition);
    }
  };

  const goToPrev = () => {
    if (slideshow.current.children.length > 0) {
      const lastSlide =
        slideshow.current.children[slideshow.current.children.length - 1];
      const slideWidth = slideshow.current.children[0].offsetWidth;
      slideshow.current.insertBefore(lastSlide, slideshow.current.firstChild);
      slideshow.current.style.transition = 'none';
      slideshow.current.style.transform = `translateX(-${slideWidth}px)`;
      setTimeout(() => {
        slideshow.current.style.transition = `300ms ease-out all`;
        slideshow.current.style.transform = `translateX(0)`;
      }, 300);
    }
  };

  return (
    <section className="content-wrapper" id="promos">
      <div className="slide-container">
        <div className="slide-show" ref={slideshow}>
          {promos.map((promo) => (
            <div className="slide" key={promo.id}>
              <div
                className="img"
                style={{ background: `url(${promo.data.image})` }}
              ></div>
            </div>
          ))}
        </div>
        <div className="arrow" id="prev-slide">
          <i className="fa-solid fa-chevron-left" onClick={goToPrev}></i>
        </div>
        <div className="arrow" id="next-slide">
          <i className="fa-solid fa-chevron-right" onClick={goToNext}></i>
        </div>
      </div>
    </section>
  );
};

export default Slide;
