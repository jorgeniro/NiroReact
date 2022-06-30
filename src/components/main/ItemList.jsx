import React from 'react'
import Item from "./Item"

const ItemList = ({items}) => {
  return (
    <div className="container">
      <div className='container container__titulo'>
      <h1>Nuestros cursos</h1>
      </div>
      {items.map(item => (
        <Item
          key={item.id} 
          id={item.id}
          name={item.name}
          image={item.image}
          price={item.price}  
         />

      ))}
    </div>
  )
}

export default ItemList