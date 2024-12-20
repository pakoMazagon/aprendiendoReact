import { useContext } from "react"
import MiContexto from "../contexto/MiContexto"
import { Navigate } from "react-router-dom";


const RutasPrivadas = ({children}) => {
    const {logeado} = useContext(MiContexto);
  return (logeado)
    ? children
    : <Navigate to="/login" />
}

export default RutasPrivadas