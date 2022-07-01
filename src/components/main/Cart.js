import React from 'react'
import { useCartContext } from './CartContext';

const Cart = () => {

    const {cart, clearCart, removeItem} = useCartContext();
    const listaDeTotales = []
  


    return (
        <div className="container">
            <div className="container container__titulo">
                <h1>Carrito</h1>
            </div>
            {cart.map((cart) => {
              return (
              <ul className='carrito__list'>
                <li key={cart.name}><b>Producto:</b> {cart.name}</li>
                <li key={cart.price}><b>Precio por unidad:</b> $ {cart.price}</li>
                <li key={cart.quantity}><b>Cantidad:</b> {cart.quantity}</li>
                <li key={cart.image}><img src={cart.image} alt="" className='carrito__imagen'/></li>
                <li key={cart.price}><b>Total:</b> $ {cart.price * cart.quantity}</li>
                <li key={cart.id}><button className='btn' onClick={() => removeItem(cart.id)}>Eliminar</button></li>
              </ul>
              )})}
        </div>
    )
}






export default Cart