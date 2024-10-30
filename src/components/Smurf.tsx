import React from 'react'

interface SmurfProps {
    id: string;
    name: string;
    image: string;
    color: string;
    isEnable: boolean;
    onClick: () => void;
    matched: boolean;
  }

const Smurf: React.FC<SmurfProps> = ({ name, image, color, isEnable, onClick, matched}) =>{    
    const cardClass = `smurfDiv ${isEnable ? 'selectable' : ''} ${matched ? 'matched' : ''}`;
    return (
        <div className={`${cardClass} ${isEnable ? "is-flipped" : ""}`} onClick={onClick} style={{ backgroundColor: isEnable?color: 'gray' }}>
          <h2>{isEnable ? name : "???"}</h2>
          {isEnable ? 
               (<img src={image} alt={name} />) 
               : (<div className="placeholder-img">?</div> /* Cuadro fijo cuando no se muestra la imagen */)
          }
        </div>
      );
}

export default Smurf;