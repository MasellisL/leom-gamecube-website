import React from 'react'
import Home from './pages/home.jsx'
import Controllers from './pages/controllers.jsx'
import Mods from './pages/mods.jsx'
import NavBar from './navbar.jsx'
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
  }

  return(
  <React.StrictMode>
      <NavBar />
      <section className="main">
      <Component />
      </section>
  </React.StrictMode>
  )
}
