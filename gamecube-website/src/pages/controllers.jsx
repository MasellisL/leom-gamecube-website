import Card from '../item-card.jsx';
import items from '../items.jsx';

export default function Controllers(props) {

    const itemCards = items.map(item => {

        return(
          <Card
            img={item.img}
            title={item.title}
            price={item.price}
            key={item.id}
            onClick={props.handleCardClick}
              />
        )
      })

    return(
        <section className="cards-list">
        {itemCards}
        </section>
    )
}