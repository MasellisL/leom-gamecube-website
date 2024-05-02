import 'bulma/css/bulma.css'
import './navbar.css'gi
import Logo from './assets/logo.jpg'


export default function NavBar() {
    return(
        <main>
            <nav className="navbar" role="navigation" aria-label="main navigation">
  <div className="navbar-brand">
  <a className="navbar-item" href="#">
                        <img className="logo" src={Logo} alt="Logo" />
  </a>

    <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" className="navbar-menu">
    <div className="navbar-start">
      <a className="navbar-item">
        Home
      </a>

      <a className="navbar-item">
        something
      </a>

      <a className="navbar-item">
        something
      </a>

    </div>
  </div>
</nav>
        </main>
)}

