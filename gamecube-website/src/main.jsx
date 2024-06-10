import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Home from './pages/home.jsx';
import Controllers from './pages/controllers.jsx';
import Cart from './pages/cart.jsx';
import Mods from './pages/mods.jsx';
import Contact from './pages/contact.jsx';
import NavBar from './navbar.jsx';
import Clicked from './pages/clicked.jsx';
import "./item-card.css";

function MainContent() {

  const [cart, setCart] = React.useState([])
  
  const [clickedItem, setClickedItem] = React.useState(null);
  const navigate = useNavigate();

  const handleCardClick = (item) => {
    setClickedItem(item);
    navigate('/clicked');
  };

  return (
    <>
      <NavBar />
      <section className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/controllers" element={<Controllers handleCardClick={handleCardClick} />} />
          <Route path="/mods" element={<Mods handleCardClick={handleCardClick} />} />
          <Route path="/cart" element={<Cart  setCart={setCart} cart={cart} clickedItem={clickedItem} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/clicked" element={<Clicked cart={cart} setCart={setCart} clickedItem={clickedItem} />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </section>
    </>
  );
}

export default function Main() {
  return (
    <React.StrictMode>
      <Router>
        <MainContent />
      </Router>
    </React.StrictMode>
  );
}