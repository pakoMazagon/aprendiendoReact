import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom"
import MiContexto from "../contexto/MiContexto";

const NavBar = () => {
    const {deslogearme} = useContext(MiContexto);
    const navegacion = useNavigate();
    const logout= () => {
        deslogearme();
        navegacion('/login',{replace:true}); //el replace es para que en el navegador al darle atras no pueda volver
    }
  return (
    <>
        <nav>
            <div>
                <NavLink to="/salonBarra">Salon Barra</NavLink>
                <NavLink to="/salonComedor">Salon Comedor</NavLink>
                <NavLink to="/barra">Barra</NavLink>
                <NavLink to="/terraza">Terraza</NavLink>
                <NavLink to="/login">Login</NavLink>
            </div>                        
            <button onClick={logout}>Logout</button>
        </nav>
    </>
  )
}

export default NavBar