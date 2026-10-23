import {NavLink} from "react-router"
import "./Navbar.css"


function Navbar(){
    return(
        <nav className = "navbar">
            <NavLink to="/" end>Home</NavLink>
            <NavLink to="/about" end>About</NavLink>
            <NavLink to="/contact" end>Contact</NavLink>
        </nav>
    )
}
export default Navbar