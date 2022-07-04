import React from 'react'
import { useCartContext } from './CartContext';
import { Link } from 'react-router-dom'



const Cart = () => {

    const {cart, clearCart, removeItem, getTotal} = useCartContext();
    
    const comprar = () => {
        clearCart();
        alert ('Gracias por su compra')
    }
    

   
    if(cart.length === 0){
        return(
          <div className='container'>
            <h2>Este carrito está vacio, vuelve a la lista de cursos!</h2>
            <Link className='' to={`/`}> <button className='btn'> Ver Cursos </button> </Link>
          </div>
        )
      }else{
        return (
            <div className="container">
                <div className="container container__titulo">
                    <h1>Carrito</h1>
                </div>
                {cart.map((cart) => {
                return (
                        <tr className='carrito__list'>
                            <td><b>Producto:</b> {cart.name}</td>
                            <td><b>Precio por unidad:</b> $ {cart.price}</td>
                            <td><b>Cantidad:</b> {cart.quantity}</td>
                            <td><img src={cart.image} alt="" className='carrito__imagen'/></td>
                            <td><b>Total:</b> $ {cart.price * cart.quantity}</td>
                            <td><button className='btn' onClick={() => removeItem(cart.id)}>Eliminar</button></td>
                        </tr>      
                )})}
                <div className='container'>
                    <h2>Total: <small className="text-muted">${getTotal()}</small></h2>
                    <button className="btn" onClick={() => clearCart()}>Vaciar carrito</button>
                    <Link to="/"><button className='btn'>Volver a la tienda</button> </Link>
                    <button className="btn" onClick={() => comprar()}>Comprar</button>
                </div>
            </div>
        )
}

}




export default Cart