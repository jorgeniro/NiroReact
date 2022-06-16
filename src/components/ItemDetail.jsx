import React from "react";
import ItemCount from "./ItemCount";


const ItemDetail = ({ product }) => {
    return (
        <div className="seleccionado">
            <div>
                <h2>{product.name}</h2>
                <img src={product.image} alt={product.name}/>
                <h3>{product.description}</h3>
           
                <ItemCount stock={5} initial={1}/>
            </div>
        </div>
    );
};

export default ItemDetail;