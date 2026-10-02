
// src/components/Elements/Navbar/Navbar.jsx

import './CSS/navbar.css';

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-inner">
        <a href="#home" className="navbar-logo">
          <span className="logo-symbol">✦</span>

          <span className="logo-text">
            CODERINNA
          </span>

          <span className="logo-status">
            / She/her ♀️
          </span>
        </a>

        <nav className="navbar-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#archive">Archive</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;