import { useState } from "react"

const ItemCount = ({stock, initial, onAdd }) => {
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
    const confirmarContador = () => {
        onAdd(contador);
        setContador(0);
        if (contador === 0) {
                return (
                    alert(`Seleccione una cantidad de cursos`)
            )
        } else if (contador === 1) {	
            return (
                alert(`Agregaste ${contador} curso al carrito. Podes agregar otros ${stock - contador}`)
            )
        } else if (contador >= 2 && contador <= 4) {	
            return (
                alert(`Agregaste ${contador} cursos al carrito. Podes agregar otros ${stock - contador}`)
            )
        }
        else  {	
            return (
                alert(`Agregaste ${contador} cursos al carrito. Por el momento no hay más cursos disponibles`)
            )
        } 
        
    }
    let balance = stock - contador;

    return (
        <div>
            <p className="count">Cantidad de cursos seleccionados : {contador}</p>
            <button className="btn" onClick={aumentarContador}>+</button>
            <button className="btn" onClick={disminuirContador}>-</button>
            <button className="btn" onClick={confirmarContador}>Agregar al carrito</button>
            <p className="stock">Stock: {balance}</p>
            
        </div>
    )
}


export default ItemCount
