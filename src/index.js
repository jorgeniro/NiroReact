
//import <algo> from "ruta relativa/ruta paquete"

//Traigo la libreria de React
import React from 'react';

//Traigo la libreria de ReactDOM
import ReactDOM from 'react-dom/client';

import App from './App';

import "./styles.css"


//Agarrar una app que ya exista de REACT
// function App () {
//   return "Hola Mundo"
// }

//Mostrar la APP en el DOM
//Crea un punto inicial (root) en donde la App se va a montar (dibujar)
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App/>);

