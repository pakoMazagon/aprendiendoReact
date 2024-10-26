import { useRef, useState } from 'react'
import gruñonImg from './assets/images/Gruñon.png'
import filosofoImg from './assets/images/Filosofo.png'
import fortachonImg from './assets/images/Fortachon.png'
import incognitImg from './assets/images/incognit.png'
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

  const [smurfIndex, setSmurfIndex] = useState(0);

  const refSmurf = useRef<any>(smurfs[0].name);  

  const changeSmurfImage = (e:any) =>{        
    if(e.target.src.includes(incognitImg)){      
      e.target.style.visibility="hidden";
      e.target.src = "";
    }
    else{
      e.target.src = incognitImg;
      console.log(`e.target parentNode es`+e.target.parentNode)      
    }    
    e.target.parentNode.style.background = "white";
  }

  const changeSmurfText = (e:any) =>{    
    console.log(`e.target es`+e.target.innerHTML)
    if(e.target.innerHTML == "Visto"){
      e.target.style.visibility="hidden";
      e.target.innerHTML = "";
    }
    else{
      e.target.innerHTML = "Visto";
    }    
  }

  return (
    <>                      
      <h1>Los Pitufos</h1>       
      <div className='principalDiv'>  
        <div ref={refSmurf} className='smurfDiv' >         
          <h2 onClick={changeSmurfText}>Fortachon</h2>
          <img onClick={changeSmurfImage} src={fortachonImg} /> 
        </div>
        <div ref={refSmurf} className='smurfDiv' >          
          <h2 onClick={changeSmurfText}>Filosofo</h2>
          <img src={filosofoImg} onClick={changeSmurfImage}/>
        </div>
        <div ref={refSmurf} className='smurfDiv' >          
          <h2 onClick={changeSmurfText}>"Gruñon"</h2>
          <img src={gruñonImg} onClick={changeSmurfImage}/>
        </div>
      </div>

    </>
  )
}

export default App
