import React from 'react'
import ItemCount from './ItemCount'
import { useState } from 'react' 
import { Link} from 'react-router-dom'

function ItemDetail({name, id, description, stock, price, image}) {
  const [ocultar, setOcultar] = useState()
  const onAdd = (count) => {
    setOcultar(count)
    console.log(count)
  }
  

  return (
    <div className='seleccionado'>
    <h3>{name}</h3>
    <img src={image} alt={name}/>
    <div>
        <h2><b>$ {price}</b></h2> 
        <p>{description}</p>
    </div>
    <div>
        {ocultar ?  <Link to="/Cart"><button className='vaciar'>Ir al carrito</button> </Link> : 
        <ItemCount initial={1} stock={stock} onAdd={onAdd} />}
    </div>
    </div>
  )
}

export default ItemDetail

