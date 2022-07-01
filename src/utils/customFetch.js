import productos from "./products";

export const customFetch = () => {
    return new Promise ((resolve) => {
        setTimeout(()=> {
            resolve(productos);
        }, 100)
    })
}

export const getProductsById = (id) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(productos.find(prod => prod.id === id))
        }, 100)
    })
}