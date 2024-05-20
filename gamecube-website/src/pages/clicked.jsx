import React, { useContext } from 'react';
import { ClickedItemContext } from './clicked-item-context.jsx'

export default function Clicked() {
    const { clickedItem } = useContext(ClickedItemContext);

    console.log('Clicked item:', clickedItem); // Log the clicked item

    if (!clickedItem) {
        return <p>No item selected.</p>;
      }

    return(
    <div>
            <img src={clickedItem.img} alt={clickedItem.title} />
            <h1>{clickedItem.title}</h1>
            <p>{clickedItem.description}</p>
            <p>${clickedItem.price}</p>
    </div>
    )
}