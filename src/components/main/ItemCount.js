import { useState } from "react"

const  ItemCount  = ({stock, initial, onAdd, onVaciar, onVaciarCarrito})  => {
    const [contador, setContador] = useState(initial);
    

    const aumentarContador = () => {
        if (contador < stock) {
            setContador(contador + 1);
        }
    }
    const disminuirContador = () => {
        if (stock > 0 && contador > 0) {
            setContador(contador - 1);
        }
    }
   

    return (
        <div>
            <p className="count">Cantidad de cursos seleccionados : {contador}</p>
            <button className="btn" onClick={aumentarContador}>+</button>
            <button className="btn" onClick={disminuirContador}>-</button>
           
            <br></br>   
           <button className="vaciar" onClick={() => onVaciar(contador)}>Quitar del carrito</button>
          <button className="vaciar" onClick={() => onVaciarCarrito(contador)}>Vaciar carrito</button>
          <button className="vaciar" onClick={() => onAdd(contador)}>Comprar</button>
        </div>
    )
}
export default ItemCount
