import React, {createContext, useState, useContext} from "react";

export const CartContext = createContext({});
export const useCartContext = () => useContext(CartContext);

export const CartProvider = (props) =>{
    const [cart, setCart] = useState([]);

    const clearCart = () => setCart([]);
    const removeItem = id => setCart(cart.filter(item => item.id !== id));
    const isInCart = (id) => cart.some(item => item.id === id);

    const addToCart = (item, quantity) => {
        if(isInCart(item.id)){
            const newCart = cart.map(check => {
                if(check.id === item.id){
                    return{...check, quantity: check.quantity + quantity}
                }else return check;
            })
            setCart(newCart);
        }else{
            setCart(prev => [...prev, {...item, quantity}]);
        }
    };
    function getTotal(){
        return cart.reduce((actual, {price, quantity}) => actual + price * quantity, 0);
    }
    
    console.log (getTotal())

    function cartLenght(){
        let cantidad = 0;
        cart.forEach(i=>{
            cantidad = cantidad + i.count;
        })
        return(cantidad)
    }

    console.log(cart)

    return(
        <>
            <CartContext.Provider value={{
                cart,
                setCart,
                clearCart,
                cartLenght,
                getTotal,
                addToCart,
                removeItem}}>
                {props.children}
            </CartContext.Provider>
        </>
    );
};
