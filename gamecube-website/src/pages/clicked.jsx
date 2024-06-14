import "./clicked.css"
import React from 'react'

export default function Clicked(props) {
  const [message, setMessage] = React.useState('');

    if (!props.clickedItem) {
        return <p>No item selected.</p>;
      }

      function getUID() {
        return Date.now().toString(36);
      }
      let timeStamp = getUID();
      const addToCart = () => {
        delete props.clickedItem.id;
        const newClickedItem = {
          ...props.clickedItem,
          id: timeStamp
        }
        props.setCart(prevCart => [...prevCart, newClickedItem])
        setMessage('Item Added');
        setTimeout(() => {
          setMessage('');
        }, 3000);
      };
      

    return(
    <div className="clicked-page">
      {message && <div className="notification">{message}</div>}
      <div className="clicked-item-container">
            <div className="clicked-img-container">
              <img className="clicked-img" src={props.clickedItem.img} alt={props.clickedItem.title} />
            </div> 
            <div className="clicked-details">
              <h1 className="clicked-title">{props.clickedItem.title}</h1>
              <p className="clicked-price">${props.clickedItem.price}</p>
              <p className="clicked-description">{props.clickedItem.description}</p>
            </div>
      </div>
            <div className="add-to-cart-button-container">
              <button onClick={addToCart} className="add-to-cart">Add Item to Cart</button> 
            </div>  
    </div>
    )
}
