import NavBar from "./components/header/NavBar"
import CartWidget from "./components/header/CartWidget"
import Logo from "./components/header/Logo"


const Header = () => {

    return (
        <header className="head"> 
            <Logo/>
            <NavBar/>
            <CartWidget/>
        </header>
    )
}

export default Header