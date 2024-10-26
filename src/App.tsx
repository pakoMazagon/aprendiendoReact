import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import gruñonImg from './assets/images/Gruñon.png'
import filosofoImg from './assets/images/Filosofo.png'
import fortachonImg from './assets/images/Fortachon.png'
import pitufinaImg from './assets/images/Pitufina.png'
import viteLogo from '/vite.svg'
import './App.css'

interface SmurfProps {
  name: string;
  image: string;
}

const Smurf: React.FC<SmurfProps> = ({name, image}) => {
  return (
    <div>
      <h2>{name}</h2>
      <img src={image} alt={name} />
    </div>
  );
}



function App() {  
  const smurfs:Object[] = [{name:'Gruñon',img:gruñonImg},{name:'Fortachon',img:fortachonImg}, {name:'Filosofo',img:filosofoImg}];
  
  const [count, setCount] = useState(0);

  const [smurfIndex, setSmurfIndex] = useState(0);

  const refSmurf = useRef<any>(smurfs[0].name);  

  const changeSmurf = () =>{    
    setSmurfIndex((smurfIndex) => (Number(smurfIndex) +1) % smurfs.length);
    refSmurf.current = smurfs[(Number(smurfIndex) +1) % smurfs.length].name;
    {console.log(smurfs[refSmurf.current])}
  }

  return (
    <>    
      {console.log(`referencia es:`+refSmurf.current)}      
        
      <h1>Los Pitufos</h1>       
      <div className='principalDiv'>  
        <div ref={refSmurf} className='smurfDiv' onClick={changeSmurf}>          
          <Smurf name={refSmurf.current} image={smurfs[smurfIndex].img} />
        </div>
      </div>
      <div ref={refSmurf} className="referenceDiv">Hola</div> 
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
