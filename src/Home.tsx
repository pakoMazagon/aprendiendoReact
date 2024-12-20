import "./Home.css";
import MiProvider from "./contexto/MiProvider";
import RouterLogin from "./routes/RouterLogin";
const {VITE_BACKEND_URL} = import.meta.env;


function Home() {  

  return (
    <>
      <MiProvider>
        <RouterLogin />
      </MiProvider>      
    </>
  );
}

export default Home;
