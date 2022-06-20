import { Link } from 'react-router-dom'

function Item({id, name, image, price}) {

    return (
        <div className="card">
            <h2>{name}</h2>
            <img src={image} alt={name}/>
            <p>${price}</p>
            <button className="btn"><Link to={`/item/${id}`} className="link">VER INFO</Link></button>
        </div>
    );
}


export default Item;