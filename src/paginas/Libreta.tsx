import { Navigate, useNavigate, useParams } from "react-router-dom"
import data from "../datos/dataSalones.js"

const Libreta = () => {
    const { sector, nombreTradicional} = useParams();
    console.log(`sector Libreta:${sector}`);
    console.log(nombreTradicional);
    const mesaEncontrada = data.find(dato => dato.sector===sector && dato.nombreTradicional===nombreTradicional);
    
    const navegacion = useNavigate();
    const volver=()=>{
        navegacion(-1);
    }
    if(!mesaEncontrada){
        return <Navigate to={`/${sector}`}/>
    }

  return (
    <>
        <h1>{sector}-Mesa: {nombreTradicional} ({mesaEncontrada.nombreActual})</h1>
        <button onClick={volver}>Volver</button>
    </>
  )
}

export default Libreta