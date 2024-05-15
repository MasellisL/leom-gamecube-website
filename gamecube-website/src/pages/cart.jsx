import "./cart.css"
import React, { useState } from 'react'
import "/images/control.jpg"
import CartItem from "../cart-item.jsx"

export default function Cart(props) {

    const [cart, setCart] = React.useState([{
        img: "/images/control.jpg",
        title: "emerald gamecube controller",
        price: "$50",
        id: "1"
    }]);

    const cartItems = cart.map(item => {
        return(
          <CartItem
            img={item.img}
            title={item.title}
            price={item.price}
            id={item.id}
              />
        )
      })

    return(
          <main>
            <div className="cart-items">
              {cartItems}
              {cartItems}
              {cartItems}
            </div>
          </main>
    )
}