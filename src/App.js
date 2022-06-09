import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import Header from './Header';
import Footer from './Footer';
import CartWidget from './components/CartWidget';



function App() {
     return (
        <>       
        <div className='head'>
           <Header/>
           <NavBar/>
           <CartWidget/>
        </div>
        <div>
           <ItemListContainer/>  
        </div>
           <Footer/>
        </>

    ); 
}

export default App
