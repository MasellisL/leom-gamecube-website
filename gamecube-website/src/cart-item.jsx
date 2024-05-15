import "./cart-item.css"

export default function CartItem(props) {
    return(
    <main className="cart-main">
    <div className="cart-items-container">
      <div className="cart-item-info">
        <div className="cart-image">
            <img src ={props.img}></img>
        </div>   
        <p>{props.title}</p>
        <p>{props.price}</p>
      </div>
    </div>
    </main>
    )
}