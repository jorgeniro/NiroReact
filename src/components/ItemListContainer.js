import React, {useEffect, useState } from "react"
import customFetch from "../utils/customFetch";
import productos from "../utils/products";
import ItemList from "./ItemList";


function ItemListContainer() {
  console.log("CARGANDO CURSOS...");
  const [items, setItems] = useState([])
  useEffect(() => {
    customFetch( 2000, productos)
      .then(r => setItems(r))
}, [items])

console.log(items)

  return (
    <div className="container">
     <ItemList products={items}/>
    </div>
  )

}



export default ItemListContainer