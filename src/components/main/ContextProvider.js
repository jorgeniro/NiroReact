import React, {createContext, useState, useEffect, useContext} from "react";

export const CartContext = createContext();
export const useCartContext = () => useContext(CartContext);



const Context = ({children}) => {

  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);


  return (
    <CartContext.Provider value={cart}>
      {children}
    </CartContext.Provider>
  )
}


export default Context