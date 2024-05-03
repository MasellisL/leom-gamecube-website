import Card from '../item-card.jsx'
import items from '../items.jsx'
export default function Controllers() {

    const itemCards = items.map(item => {
        return(
          <Card
            img={item.img}
            title={item.title}
            price={item.price}
            key={item.id}
              />
        )
      })

    return(
        <section className="cards-list">
        {itemCards}
        </section>
    )
}