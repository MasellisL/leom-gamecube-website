import Card from '../item-card.jsx'
import mods from '../mods.jsx'

export default function Mods() {
    const modCards = mods.map(item => {
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
        {modCards}
        </section>
    )
}