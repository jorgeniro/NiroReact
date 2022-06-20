

export const productos = [
    {
        id: 1,
        name: "YOGA PARA PRINCIPIANTES",
        price: "200",
        description: "Curso de YOGA PARA PRINCIPIANTES",
        image: "curso1.jpg",
        stock: 5,
    },
    {
        id: 2,
        name: "YOGA Y CHAKRAS",
        price: "300",
        description: "Curso de YOGA Y CHAKRAS",
        image: "curso2.jpg",
        stock: 5,
    },
    {
        id: 3,
        name: "YOGA IYENGAR",
        price: "400",
        description: "Curso de YOGA IYENGAR",
        image: "curso3.jpg",
        stock: 5,
    },
    {
        id: 4,
        name: "YOGA ANTI ESTRÉS",
        price: "500",
        description: "Curso YOGA ANTI ESTRÉS",
        image: "curso4.jpg",
        stock: 5,
    },
    {
        id: 5,
        name: "YOGA BOWSPRING",
        price: "400",
        description: "Curso de YOGA BOWSPRING",
        image: "curso5.jpg",
        stock: 5,
    },
    {
        id: 6,
        name: "YOGA CENTRO",
        price: "500",
        description: "No es ningún secreto que el yoga aporta múltiples beneficios y que se está posicionando como una de las rutinas de actividad física más consultadas y demandadas. Frente a frenéticas prácticas como el CrossFit o el HIIT, hay quien busca una disciplina más tranquila, que le permita desconectar y a la vez trabajar su cuerpo. El yoga es una opción perfecta en este supuesto, que combina respiración con espacios meditativos, a la vez que movimientos en forma de postura (asanas) encaminados también a fortalecer la musculatura",
        image: "curso6.jpg",
        stock: 5,
    },
    {
        id: 7,
        name: "YOGA BOWSPRING",
        price: "400",
        description: "Curso de YOGA BOWSPRING",
        image: "curso5.jpg",
        stock: 5,
    },
    {
        id: 8,
        name: "YOGA CENTRO",
        price: "500",
        description: "Curso YOGA PARA TU CENTRO",
        image: "curso6.jpg",
        stock: 5,
    },
    {
        id: 9,
        name: "YOGA BOWSPRING",
        price: "400",
        description: "Curso de YOGA BOWSPRING",
        image: "curso5.jpg",
        stock: 5,
    },
    {
        id: 10,
        name: "YOGA CENTRO",
        price: "500",
        description: "Curso YOGA PARA TU CENTRO",
        image: "curso6.jpg",
        stock: 5,
    }
]



export const traerProductos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productos);
        }, 1000);
    });
};

const unItem = productos[0]

export const traerProducto = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(unItem);
        }, 1000);
    });
};