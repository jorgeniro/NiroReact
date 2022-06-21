import React, {useEffect, useState } from "react"
import ItemList from "./ItemList";
import { productos} from "../../utils/products";
import { useParams } from "react-router-dom"


const Cargando = () => {
  return (
    <div className="container">
      <h1>Cargando...</h1>
    </div>
  )
}

const ItemListContainer = ({ greeting }) => {
  const [items, setItems] = useState([])
  const { category } = useParams()
  const [cargando, setCargando] = useState(true)

  useEffect(() => {
    setCargando(true)
    new Promise((res, rej) => {
      setTimeout(() => {
        res(category ? productos.filter((producto)=>{
          return producto.category == category
        }) : productos)
      }, 2000)
    })
      .then(resultado => {
        setItems(resultado)
        setCargando(false)
      })
  }, [category])



  return (
    <div className="container">
      {cargando ? <Cargando /> : <ItemList items={items} />}
    </div>
  )
}

export default ItemListContainer