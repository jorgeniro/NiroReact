import React, {useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { getProductsById } from "../../utils/customFetch";
import ItemDetail from "./ItemDetail"




function ItemDetailContainer ()  {
  const [product, setProduct] = useState({})
  const {id} = useParams()
  
useEffect(() => {
  
  getProductsById(parseInt(id))
  .then(response => {
    setProduct(response)
  }
  )
}, [id]);

if (product.length === 0) {
  return <h1>Loading...</h1>
}
    else {
        return (
          <div className="container">
              <ItemDetail {...product} />
          </div>
    )} 
}


export default ItemDetailContainer;

