import React, {useEffect, useState } from "react"
import { traerProducto } from "../utils/products";
import ItemDetail from "./ItemDetail"



const ItemDetailContainer = () => {
  const [product, setProduct] = useState({})

  useEffect(() => {
    setTimeout(() => {
      traerProducto(1)
      .then(product => {
        setProduct(product)
      })
    }, 2000)
  }, [])



  return (
            <div>
              <ItemDetail product={product} />
            </div>
          );
  
}

export default ItemDetailContainer;

