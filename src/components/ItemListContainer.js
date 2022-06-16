import React, {useEffect, useState } from "react"
import ItemList from "./ItemList";
import { traerProductos } from "../utils/products";


const ItemListContainer = ({greetings}) => {
  const [products, setProducts] = useState([])
  
  useEffect(() => {
    traerProductos()
      .then((res) => {
        setProducts(res);
        })
      .catch((error) => {
          console.log(error);
          });  
}, [])


  return (
    <div className="">
      <h2>{greetings}</h2>
     <ItemList items={products}/>
    </div>
  )

}

export default ItemListContainer