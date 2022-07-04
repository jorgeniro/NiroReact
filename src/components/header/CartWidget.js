import React from 'react'
import {Link} from 'react-router-dom'
import {useCartContext} from '../main/CartContext'

const CartWidget = (props) => {  

    const {cart} = useCartContext();

    return( 
        <div className={cart.length === 0 ? "escondido":"visible"}>
        <Link to ={'/cart'}> 
        <span className="material-symbols-outlined carrito">
            shopping_cart
        </span>
        <label> <b> {cart.reduce((actual, {quantity}) => actual + quantity, 0)} </b></label>
        </Link>
        </div>
    )  
}

export default CartWidget