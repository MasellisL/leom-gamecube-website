import "./cart.css"
import React from 'react'
import "/images/control.jpg"
import CartItem from "../components/cart-item.jsx"

export default function Cart(props) {

    const [total, setTotal] = React.useState(props.cart.price)

    // Function to update the total price
    const calculateTotal = () => {
      const prices = props.cart.map(item => item.price);
      const totalPrice = prices.reduce((acc, curr) => acc + curr, 0);
      setTotal(totalPrice);
    };

  React.useEffect(() => {
    calculateTotal();
  }, [props.cart]);
  
    const cartItem = props.cart.map(item => {
        return(
          <CartItem
            img={item.img}
            title={item.title}
            price={item.price}
            id={item.id}
            key={item.id}
            removeItem={() => props.removeItem(item.id)}
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