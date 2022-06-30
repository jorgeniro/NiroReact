import { Link } from 'react-router-dom'


const Item = ({name, price, id, image}) => {
    return (
      <div className="card">
        <h2>{name}</h2>
        <img src={image} alt={name} />
        <p>Precio : ${price}</p>
        <button className="btn"><Link to={`/item/${id}`} className="link">VER INFO</Link></button>
      </div>
    )
  }
  export default Item