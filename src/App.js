import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import NavBar from './components/NavBar'
import CartWidget from './components/CartWidget';


const App  = () => {
   
    return (
        <> <div className='head'>
                <Header/>
                <NavBar/>
                <CartWidget/>
            </div>   
            <Main/>
            <Footer/>
        </>
    ) 
}


export default App
