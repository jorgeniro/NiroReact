import { Link } from 'react-router-dom'


const Item = ({item}) => {
    return (
      <div className="card">
        <h2>{item.name}</h2>
        <img src={item.image} alt={item.name} />
        <p>Precio : ${item.price}</p>
        <button className="btn"><Link to={`/item/${item.id}`} className="link">VER INFO</Link></button>
      </div>
    )
  }
  export default Item