import { useEffect, useState } from 'react'
import gruñonImg from './assets/images/Gruñon.png'
import filosofoImg from './assets/images/Filosofo.png'
import fortachonImg from './assets/images/Fortachon.png'
import azraelImg from './assets/images/Azrael.png'
import Smurf from './components/Smurf.tsx'
import { v4 as uuidv4 } from 'uuid'
import './App.css'

function shuffleArray(array: any[]): any[] {
  return array
    .map(value => ({ ...value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ sort, ...value }) => value);
}



function App() {  
  const initialSmurfs:any[] = 
            [
              {id:uuidv4(),name:'Gruñon',image:gruñonImg, isEnable:false, color:'red'},
              {id:uuidv4(),name:'Fortachon',image:fortachonImg, isEnable:false,color:'yellow'}, 
              {id:uuidv4(),name:'Filosofo',image:filosofoImg, isEnable:false,color:'green'}, 
              {id:uuidv4(),name:'Azrael',image:azraelImg, isEnable:false,color:'blue'}];

  // Duplicamos las cartas para crear las parejas y luego barajamos
  const [cards, setCards] = useState(() =>
    shuffleArray([...initialSmurfs, ...initialSmurfs.map(card => ({ ...card, id: uuidv4() }))])
  );

  const [selectedCards, setSelectedCards] = useState<any>([]);

  const handleCardClick = (id:any) => {
    console.log('handleCardClick fuera:'+id+',selectedCards:'+selectedCards);
    if (selectedCards.length < 2) {
      setSelectedCards([...selectedCards, id]);
      setCards(cards =>
        cards.map(card =>
          card.id === id? { ...card, isEnable: true } : card
        )
      );
      console.log('handleCardClick dentro:'+selectedCards);
    }
  };

  useEffect(() => {
    console.log('useEffect fuera'+selectedCards);
    if (selectedCards.length === 2) {
      console.log('useEffect dentro:'+selectedCards);
      const [first, second] = selectedCards;
      const firstCard = cards.find(card => card.id === first);
      const secondCard = cards.find(card => card.id === second);

      if (firstCard && secondCard && firstCard.name === secondCard.name) {
        // Las cartas coinciden, mantén reveladas ambas
        console.log('Las cartas coinciden, mantén reveladas ambas');
        setCards(cards =>
          cards.map(card =>
            card.id === first || card.id === second ? { ...card, isEnable: true } : card
          )
        );
      } else {
        console.log('Las cartas no coinciden, ocúltalas nuevamente después de un retraso')
        // Las cartas no coinciden, ocúltalas nuevamente después de un retraso
        setTimeout(() => {
          setCards(cards =>
            cards.map(card =>
              card.id === first || card.id === second ? { ...card, isEnable: false } : card
            )
          );
        }, 1000);
      }
      // Limpiamos la selección después de comparar
      setSelectedCards([]);
    }
  }, [selectedCards, cards]);
  

  

  

  return (
    <>                      
      <h1>Los Pitufos</h1>
      <div className='principalDiv'>  
        {cards.map(card =>{
          return <Smurf key={uuidv4()} id={card.id} name={card.name} image={card.image} color={card.color} isEnable={card.isEnable} onClick={()=>handleCardClick(card.id)}/>
        })}
      </div>

    </>
  )
}

export default App
