import ItemListContainer from './components/main/ItemListContainer';
import ItemDetailContainer from './components/main/ItemDetailContainer';
import { Route, Routes } from 'react-router';
// import ContextProvider from './components/main/ContextProvider';

const Main = () => {
    return (
        <main className="main">
            <Routes>
                <Route path="/" element={<ItemListContainer />} />
                <Route path="/category/:category" element={<ItemListContainer />} />
                <Route path="/item/:id" element={<ItemDetailContainer />} />
               
            </Routes>
        </main>
    )
}

// {/* <Route path="/Cart" element={<Cart/>}/> */}

export default Main;