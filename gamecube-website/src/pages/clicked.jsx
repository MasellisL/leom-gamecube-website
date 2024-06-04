
export default function Clicked(props) {

    console.log('Clicked item:', props.clickedItem); // Log the clicked item

    if (!props.clickedItem) {
        return <p>No item selected.</p>;
      }

    return(
    <div>
            <img src={props.clickedItem.img} alt={props.clickedItem.title} />
            <h1>{props.clickedItem.title}</h1>
            <p>{props.clickedItem.description}</p>
            <p>${props.clickedItem.price}</p>
    </div>
    )
}
