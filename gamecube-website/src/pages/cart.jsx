import "./cart.css"
import React, { useState } from 'react'
import "/images/control.jpg"
import CartItem from "../cart-item.jsx"

export default function Cart(props) {

    const [cart, setCart] = React.useState([{
        img: "/images/control.jpg",
        title: "emerald gamecube controller",
        price: 50,
        id: "1"
    },
    {
      img: "/images/control.jpg",
        title: "emerald gamecube controller",
        price: 50,
        id: "2"
    }
  ]);

    const [total, setTotal] = React.useState(cart.price)

    // Function to update the total price
    const calculateTotal = () => {
      const prices = cart.map(item => item.price);
      const totalPrice = prices.reduce((acc, curr) => acc + curr, 0);
      setTotal(totalPrice);
    };

    // Use useEffect to recalculate the total whenever the cart changes
  React.useEffect(() => {
    calculateTotal();
  }, [cart]);
  
    const cartItem = cart.map(item => {
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
          <main className="cart-main">
            <div className="cart-items-container">
            <div className="cart-items">
              {cartItem}
            </div>
            </div>
            <div className="payment-container">
            <p className="total">Total: ${total}</p>
            <button className="payment-button">PAYPAL</button>
            <button className="payment-button">VENMO</button>
            <button className="payment-button">DEBIT OR CREDIT</button>
            </div>
          </main>
    )
}