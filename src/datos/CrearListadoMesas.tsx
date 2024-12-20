import DestinoMesa from '../paginas/DestinoMesa'
import dataSalones from './dataSalones'

const CrearListadoMesas = ({sector}:string) => {
    const listado = dataSalones.filter(destino => destino.sector===sector)
  return (
    <>
        <section className='listaMesas'>
            {listado.map(mesa => 
                (<DestinoMesa key={mesa.nombreTradicional}{...mesa}/>)
            )}
        </section>
    </>
  )
}

export default CrearListadoMesas