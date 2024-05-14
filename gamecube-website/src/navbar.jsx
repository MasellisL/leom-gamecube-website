import 'bulma/css/bulma.css'
import './navbar.css'
import Cart from '/images/cart.png'
import Logo from '/images/logo.jpg'


export default function NavBar() {
    return(
        <main>
            <nav className="navbar" role="navigation" aria-label="main navigation">
  <div className="navbar-brand">
  <span className="navbar-item">
                        <img className="logo" href="/" src={Logo}  />
  </span>

    <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" className="navbar-menu">
    <div className="navbar-start">

      <div className="navbar-item">
        <div className="nav-title">GameSite</div>
      </div>
      <a className="navbar-item">
        <a className="nav-button" href="/">
        Home
        </a>
      </a>

      <a className="navbar-item">
        <a className="nav-button" href="/controllers">
        Controllers
        </a>
      </a>

      <a className="navbar-item">
        <a className="nav-button" href="/mods">
        Mods
        </a>
      </a>

      <a className="navbar-item">
        <a className="nav-button" href="/contact">
        Contact Us
        </a>
      </a>


    </div>
    <div className="navbar-end">
      <div className="navbar-item">
            <a className="nav-button" href="/cart">
              <img src={Cart}></img>
            </a>
      </div>
    </div>
  </div>
</nav>
        </main>
)}

