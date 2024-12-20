import { useEffect, useState } from "react";
import mesaBarra from "../assets/mesaBarra.png"; 
import mesaSalonBarra from "../assets/mesaSalonBarra.png"; 
import mesaSalonComedor from "../assets/mesaSalonComedor.png"; 
import mesaTerraza from "../assets/mesaTerraza.png"; 
import { Link } from "react-router-dom";

const DestinoMesa = ({nombreTradicional, numero, sector, nombreActual,ocupada,camarero}) => {
    const [imagenDeMesa,setImagenDeMesa] = useState(mesaSalonBarra);
    useEffect(() =>{
        console.log('sector es...'+sector);
        if(sector === 'salonComedor'){
            setImagenDeMesa(mesaSalonComedor);
        }
        else if(sector === 'salonBarra'){
            setImagenDeMesa(mesaSalonBarra);
        }
        else if(sector === 'barra'){
            setImagenDeMesa(mesaBarra);
        }
        else if(sector === 'terraza'){
            setImagenDeMesa(mesaTerraza);
        }
    },[sector])        
  return (    
    <>        
        <div className="destinoMesa">
            <div><img src={imagenDeMesa} alt="Mesa Salon comedor"/></div>
            <div className="nombreTradicional"><span>{nombreTradicional} </span> {nombreActual}</div>            
            <div className="camarero">{camarero}
                {ocupada === true?
                    <div className="ocupada"></div>:
                    <div className="libre"></div>
                }
            </div>
            <Link to={`/${sector}/${nombreTradicional}`}>Entrar</Link> 
        </div>        
    </>
  )
}

export default DestinoMesa