import { Link } from 'react-router-dom'


const NavBar = () => {

    return (
        <ul className="menu">
            <Link to="/category/principiante" className="menu__link">principiante</Link>
            <Link to="/category/intermedio" className="menu__link">intermedio</Link>
            <Link to="/category/avanzado" className="menu__link">avanzado</Link>        
        </ul>     
    )
}

export default NavBar

