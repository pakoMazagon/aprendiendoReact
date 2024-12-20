import { useReducer } from 'react'
import MiContexto from './MiContexto'
import miReducer from './miReducer'
import types from './types'

const init = () => {
    const user = localStorage.getItem("valor");
    return {
        logeado:!!user,
        usuario:user
    }
}



const MiProvider = ({children}) => {
    const [autentificacion,dispatch] = useReducer(miReducer,{}, init); 
    const logearme = (user) => {
        const action = {
            type: types.login,
            payload:user
        }
        localStorage.setItem("valor",user);
        dispatch(action);
    }
    
    const deslogearme = () => {
        const action = {
            type: types.logout,
            payload: null
        }
        localStorage.removeItem("valor");
        dispatch(action);
    }
       
  return (
    <>
        <MiContexto.Provider value={{...autentificacion, logearme, deslogearme}}>
            { children }
        </MiContexto.Provider>
    </>
  )
}

export default MiProvider
