import ItemListContainer from './components/main/ItemListContainer';
import ItemDetailContainer from './components/main/ItemDetailContainer';
import { Route, Routes } from 'react-router';

const Main = () => {
    return (
        <main className="main">
            <Routes>
                <Route path="/" element={<ItemListContainer />} />
                <Route path="/category/:id" element={<ItemListContainer />} />
                <Route path="/item/:id" element={<ItemDetailContainer />} />
            </Routes>
        </main>
    )
}


export default Main;