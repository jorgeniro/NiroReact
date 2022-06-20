import React, {useEffect, useState } from "react"


const Item = ({ item}) => {
    const [id, setId] = useState({})

    const clickCurso = (curso) => {
        setId(curso.id)
        console.log(item.id);

    }



    return (
        <div className="card">
            <h2>{item.name}</h2>
            <img src={item.image} alt={item.name}/>
            <p>${item.price}</p>
            <button className="btn" onClick={clickCurso}>Más info</button>
        </div>
    );
}


export default Item;