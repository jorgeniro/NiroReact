import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import NavBar from './components/NavBar'
import CartWidget from './components/CartWidget';
import ItemListContainer from './components/ItemListContainer';

// Fragment: es una etiqueta que no tiene nombre. NO SE ve en el DOM 
const App  = () => {
    return (
        <> <div className='head'>
                <Header/>
                <NavBar/>
                <CartWidget/>
            </div>   
            <Main/>
            <ItemListContainer/>
            <Footer/>
        </>
    ) 
}

//hay dos formas de exportarla 

//export default variable  (sin llaves)
//export variable (con llaves)

export default App
