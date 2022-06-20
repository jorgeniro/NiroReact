import React from 'react'
import ItemCount from './ItemCount'

function ItemDetail({name, id, description, stock, price, image}) {

  return (
    <div className='seleccionado'>
    <h3>{name}</h3>
    <img src={image} alt={name}/>
    <div>
        <h2><b>$ {price}</b></h2> 
        <p>{description}</p>
    </div>
    <ItemCount initial={1} stock={stock}/>
    </div>
  )
}

export default ItemDetail

