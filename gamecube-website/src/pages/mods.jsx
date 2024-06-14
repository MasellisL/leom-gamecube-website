import Card from '../components/item-card.jsx'
import mods from '../mods.jsx'

export default function Mods({ handleCardClick }) {
  const modCards = mods.map(item => (
    <Card
      img={item.img}
      title={item.title}
      price={item.price}
      key={item.id}
      onClick={() => handleCardClick(item)}
    />
  ));

  return (
    <section className="cards-list">
      {modCards}
    </section>
  );
}