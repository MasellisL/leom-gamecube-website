import 'bulma/css/bulma.css';
import './navbar.css';
import Cart from '/images/cart.png';
import Logo from '/images/logo.jpg';
import React, { useState } from 'react';

export default function NavBar() {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <main>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <span className="navbar-item">
            <img className="logo" src={Logo} alt="Logo" />
          </span>

          <a
            role="button"
            className={`navbar-burger burger ${isActive ? 'is-active' : ''}`}
            aria-label="menu"
            aria-expanded={isActive ? 'true' : 'false'}
            data-target="navbarBasicExample"
            onClick={toggleMenu}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
          <div className="navbar-start">
            <a className="navbar-item nav-button" href="/">
              Home
            </a>
            <a className="navbar-item nav-button" href="/controllers">
              Controllers
            </a>
            <a className="navbar-item nav-button" href="/mods">
              Mods
            </a>
            <a className="navbar-item nav-button" href="/contact">
              Contact Us
            </a>
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              <a className="nav-button" href="/cart">
                <img src={Cart} alt="Cart" />
              </a>
            </div>
          </div>
        </div>
      </nav>
    </main>
  );
}
