
// src/components/Footer.jsx

import './CSS/main.css';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <div className="site-footer-line">
          <span />
          <p className="site-footer-copy">
            Kaikki oikeudet pidätetään © 2022-{new Date().getFullYear()} Coderinna
          </p>
          <span />
        </div>
      </div>
    </footer>
  );
}

export default Footer;