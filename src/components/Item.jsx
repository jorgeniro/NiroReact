import React from "react";
import ItemCount from "./ItemCount";

function Item ({id, name, image, price, description, stock,}) {
    return (
        <div className="card" key={id}>
            <h2>{name}</h2>
            <img src={image} alt={name} />
            <h4>${price}</h4>
            <p>{description}</p>
            <ItemCount stock={stock} initial={0} />
        </div>
    )
}

export default Item;