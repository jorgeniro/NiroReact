import React from 'react'
import ItemCount from './ItemCount'
import { Link} from 'react-router-dom'
import { useCartContext } from './CartContext'




const ItemDetail = ({product}) => {
  // const [ocultar, setOcultar] = useState()
  const { addToCart, removeItem, clearCart } = useCartContext();

  
  const onAdd = (count) => {
    // setOcultar(count)
    addToCart(product, count)
  }

  const onVaciar = () => {
    // setOcultar(0)
    removeItem(product.id)
  }

  const onVaciarCarrito = () => {
    // setOcultar(0)
    clearCart()
  }

  
  return (
    <div className='seleccionado'>
    <h3>{product.name}</h3>
    <img src={product.image} alt={product.name}/>
    <div>
        <h2><b>$ {product.price}</b></h2> 
        <p>{product.description}</p>
    </div>
    <div>
        <Link to="/Cart"><button className='vaciar'>Ir al carrito</button> </Link>  
        <ItemCount initial={1} stock={product.stock} onAdd={onAdd} onVaciar={onVaciar} onVaciarCarrito={onVaciarCarrito} />
    </div>
    </div>
  )
}

export default ItemDetail

