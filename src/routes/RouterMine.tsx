import { Navigate, Route, Routes } from "react-router-dom"
import SalonBarra from "../paginas/SalonBarra"
import NavBar from "../navBar/NavBar"
import SalonComedor from "../paginas/SalonComedor"
import Barra from "../paginas/Barra"
import Terraza from "../paginas/Terraza"
import Libreta from "../paginas/Libreta"

const RouterMine = () => {
  return (
    <>
        <NavBar></NavBar>
        <Routes>
            <Route path="/salonBarra" element={<SalonBarra/>}></Route>
            <Route path="/salonComedor" element={<SalonComedor/>}></Route>
            <Route path="/terraza" element={<Terraza/>}></Route>
            <Route path="/barra" element={<Barra/>}></Route>
            <Route path="/:sector/:nombreTradicional" element={<Libreta/>}></Route>
            <Route path="/" element={<Navigate to="salonBarra"/>}></Route>
        </Routes>
    </>
  )
}

export default RouterMine