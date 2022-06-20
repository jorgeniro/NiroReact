import React, {useEffect, useState } from "react"
import ItemList from "./ItemList";
import {customFetch} from "../../utils/customFetch";


function ItemListContainer() {
  const [items, setItems] = useState([])

  useEffect(() => {
    setTimeout(() => {
      
      customFetch()
      .then((res) => {
        setItems(res);
        })
      .catch((error) => {
          console.log(error);
          });  
        }, 600)
      }, [])

      if (items.length === 0) {
        return <h1>Loading...</h1>
      }
      else {
            return (
            <div className="container">
           <ItemList products={items}/>
            </div>
           )}
}

export default ItemListContainer