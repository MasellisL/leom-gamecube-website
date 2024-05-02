import React from 'react'
import NavBar from './navbar.jsx'
import Card from './item-card.jsx'
import items from './items.jsx'
import "./item-card.css"

export default function Main() {
  
  const cards= items.map(item => {
    return(
      <Card
        img={item.img}
        title={item.title}
        price={item.price}
        key={item.id}
          />
    )
  })

  return(
  <React.StrictMode>
      <NavBar />
    <section className="cards-list">
      {cards}
    </section>
  </React.StrictMode>
  )
}
