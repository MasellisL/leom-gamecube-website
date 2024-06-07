import React from 'react';
import { Link } from 'react-router-dom';
import 'bulma/css/bulma.css';
import './navbar.css';
import Cart from '/images/cart.png';
import Logo from '/images/logo.jpg';

export default function NavBar() {
  const [isActive, setIsActive] = React.useState(false);

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
            <Link className="navbar-item nav-button" to="/">
              Home
            </Link>
            <Link className="navbar-item nav-button" to="/controllers">
              Controllers
            </Link>
            <Link className="navbar-item nav-button" to="/mods">
              Mods
            </Link>
            <Link className="navbar-item nav-button" to="/contact">
              Contact Us
            </Link>
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              <Link className="nav-button" to="/cart">
                <img src={Cart} alt="Cart" />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </main>
  );
}
