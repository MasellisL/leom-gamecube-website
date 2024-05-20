import React from 'react'
import Home from './pages/home.jsx'
import Controllers from './pages/controllers.jsx'
import Cart from './pages/cart.jsx'
import Mods from './pages/mods.jsx'
import Contact from './pages/contact.jsx'
import NavBar from './navbar.jsx'
import Clicked from './pages/clicked.jsx'
import { ClickedItemProvider } from './pages/clicked-item-context.jsx'
import "./item-card.css"

export default function Main() {

  let Component
  switch (window.location.pathname) {
      case "/":
        Component = Home 
        break
      case "/controllers":
        Component = Controllers
        break
      case "/mods":
        Component = Mods
        break
      case "/cart":
        Component = Cart 
        break
      case "/contact":
        Component = Contact
        break
      case "/clicked":
        Component = Clicked
        break
      default:
        Component = Home;
        break
  }

  return(
  <React.StrictMode>
    <ClickedItemProvider>
      <NavBar />
      <section className="main">
      <Component />
      </section>
    </ClickedItemProvider>  
  </React.StrictMode>
  )
}
