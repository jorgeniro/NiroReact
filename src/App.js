import Header from './Header';
import NavBar from './components/NavBar';
import CartWidget from './components/CartWidget';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Footer from './Footer';



function App() {
     return (
        <>       
        <div className='head'>
           <Header/>
           <NavBar/>
           <CartWidget/>
        </div>
        <div>
           <ItemListContainer saludo="greetings"/>  
           <ItemDetailContainer/>
        </div>
           <Footer/>
        </>

    ); 
}

export default App
