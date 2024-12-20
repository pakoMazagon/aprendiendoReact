import { Route, Routes } from "react-router-dom"
import Login from "../paginas/Login"
import RouterMine from "./RouterMine"
import RutasPrivadas from "./RutasPrivadas"

const RouterLogin = () => {
  return (
    <>
        <Routes>
            <Route path="login" element={                
                  <Login/>          
              }>

            </Route>
            <Route path="/*" element={
                <RutasPrivadas>
                  <RouterMine/>
                </RutasPrivadas>                
              }/>
        </Routes>
    </>
  )
}

export default RouterLogin