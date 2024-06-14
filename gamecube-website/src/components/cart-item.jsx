import "./cart-item.css"

export default function CartItem(props) {
    return(
    <main className="cart-main">
    <div className="cart-items-card-container">
      <div className="cart-item-info">
        <div className="cart-image">
            <img src ={props.img}></img>
        </div>   
        <p>{props.title}</p>
        <p>{props.price}</p>
        <button onClick={props.removeItem} className="remove-button">Remove</button>
      </div>
    </div>
    </main>
    )
}