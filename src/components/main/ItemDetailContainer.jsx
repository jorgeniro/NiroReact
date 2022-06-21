import React, {useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { getProductsById } from "../../utils/customFetch";
import ItemDetail from "./ItemDetail"

const Cargando = () => {
  return (
    <div className="container">
      <h1>Cargando...</h1>
    </div>
  )
}

function ItemDetailContainer ()  {
  const [product, setProduct] = useState({})
  const {id} = useParams()
  const [cargando, setCargando] = useState(true)
  
useEffect(() => {
  setCargando(true)
  
  getProductsById(parseInt(id))
  .then(response => {
    setProduct(response)
    setCargando(false)
    })
}, [id]);

        return (
          <div className="container">
              
              {cargando ? <Cargando/> : <ItemDetail {...product} />}
          </div>
    )
}

export default ItemDetailContainer;

