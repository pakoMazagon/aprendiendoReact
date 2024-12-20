import { useContext } from "react";
import { useNavigate } from "react-router-dom"
import MiContexto from "../contexto/MiContexto";

const Login = () => {
    const {logearme} = useContext(MiContexto);
    const navegacion = useNavigate();
    const login = () => {
      logearme('paco');
      navegacion('/',{replace:true});
    }

  return (
    <>
        <div>Login</div>
        <button onClick={login}>Login</button>
    </>
    
  )
}

export default Login