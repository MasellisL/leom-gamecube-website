import React, {useContext} from 'react';
import Card from '../item-card.jsx';
import items from '../items.jsx';
import { ClickedItemContext } from './clicked-item-context.jsx';

export default function Controllers() {

  const { clickedItem } = useContext(ClickedItemContext);
  const { setClickedItem } = useContext(ClickedItemContext);

  const handleCardClick = (item) => {
    console.log('Card clicked:', item);
    setClickedItem(item);
    console.log('Clicked item:', clickedItem);
    window.location.pathname = '/clicked'
  };

    const itemCards = items.map(item => {
        return(
          <Card
            img={item.img}
            title={item.title}
            price={item.price}
            key={item.id}
            onClick={() => handleCardClick(item)}
              />
        )
      })

    return(
        <section className="cards-list">
        {itemCards}
        </section>
    )
}