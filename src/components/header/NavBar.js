import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <ul className="menu">
            <Link to="/category/Inicio" className="menu__link">Inicio</Link>
            <Link to="/category/Nosotros" className="menu__link">Nosotros</Link>
            <Link to="/category/Cursos" className="menu__link">Cursos</Link>
            <Link to="/category/Galeria" className="menu__link">Galeria</Link>
            <Link to="/category/Contacto" className="menu__link">Contacto</Link>
        </ul>     
    )
}

export default NavBar

