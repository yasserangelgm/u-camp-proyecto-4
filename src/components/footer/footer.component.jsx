import './footer.styles.css';

const Footer = (params) => {
  return (
    <>
      <footer id="footer">
        <div className="bottom-footer">
          <ul className="social-links">
            <li className="social">
              <a
                rel="noreferrer"
                href="https://www.facebook.com/cacao.cocoa.52"
                target="_blank"
              >
                <i className="fa-brands fa-facebook-f"></i>
              </a>
            </li>
            <li className="social">
              <a
                rel="noreferrer"
                href="https://www.facebook.com/cacao.cocoa.52"
                target="_blank"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
            </li>
          </ul>
          <p id="footer-info">
            Copyright © 2022 Chila Quiles Rest. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
