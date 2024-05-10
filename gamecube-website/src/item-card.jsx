import './item-card.css'

export default function Card(props) {

    return(
            <div className="item-card">
                    <img src={props.img} className="item-img" />
            
                <div className="item-stats">
                    <p className="product-name">{props.title}</p>
                    <p className="product-price">${props.price}</p>
                </div>
                    <button className="cart-button">Add to Cart</button>
            </div>
    )
}