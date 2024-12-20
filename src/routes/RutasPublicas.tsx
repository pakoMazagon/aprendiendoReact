import { useContext } from "react"
import MiContexto from "../contexto/MiContexto"
import { Navigate } from "react-router-dom";


const RutasPublicas = ({children}) => {
    const {logeado} = useContext(MiContexto);
  return (logeado)
    ? children
    : <Navigate to="/login" />
}

export default RutasPublicas