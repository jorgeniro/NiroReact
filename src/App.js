import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import { BrowserRouter } from 'react-router-dom';
import {Context} from './components/main/ContextProvider.js';



function App() {
      return (
         <Context>
         <BrowserRouter>      
            <Header/>
            <Main/>
            <Footer/>
         </BrowserRouter>
         </Context>
      ); 
}

export default App
