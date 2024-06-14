import Card from '../components/item-card.jsx';
import items from '../items.jsx'

export default function Controllers({ handleCardClick }) {

  const itemCards = items.map(item => (
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
      {itemCards}
    </section>
  );
}
