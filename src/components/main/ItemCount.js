import { useState } from "react"

const  ItemCount  = ({stock, initial, onAdd})  => {
    const [contador, setContador] = useState(0);
    

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
    const comprar = (e) => {
        alert (`Has comprado ${contador} cursos`)
        
        onAdd(contador);
    }

    return (
        <div>
            <p className="count">Cantidad de cursos seleccionados : {contador}</p>
            <button className="btn" onClick={aumentarContador}>+</button>
            <button className="btn" onClick={disminuirContador}>-</button>
            <p className="count">Stock de cursos : {stock - contador}</p>
            <br></br>   
            { contador > 0 ? <button className="vaciar" onClick={() => setContador(0)}>Vaciar</button> : null }
            { contador > 0 ? <button className="vaciar" onClick={() => comprar()}>Comprar</button> : null }
        </div>
    )
}
export default ItemCount
