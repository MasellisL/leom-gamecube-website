import React from 'react'
import './item-card.css'
import Gamecube from './assets/control.jpg'

export default function Card() {
    return(
        <div className="item-card">
            <img className="item" src={Gamecube} />
            <div className="item-stats">
            <p className="product-name">Emerald Gamecube Controller</p>
            <p className="product-price">$50</p>
            </div>
            <button className="cart-button">Add to Cart</button>
        </div>
    )
}