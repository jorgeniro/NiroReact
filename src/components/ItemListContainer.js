
import ItemCount from "./ItemCount"
const onAdd = () => {}
const ItemListContainer = ({ greeting }) => {

    return (
        <div>
          <h2>{greeting}</h2>
          <ItemCount stock={5} onAdd={onAdd} initial={1} />
        </div>
      )
}

export default ItemListContainer