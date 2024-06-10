import "./clicked.css"
export default function Clicked(props) {

    if (!props.clickedItem) {
        return <p>No item selected.</p>;
      }

      const addToCart = () => {
        props.setCart(prevCart => [...prevCart, props.clickedItem])
        console.log(props.cart);
      }
      

    return(
    <div className="clicked-page">
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
