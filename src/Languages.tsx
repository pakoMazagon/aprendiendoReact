import React, { useContext, useEffect, useState } from 'react'
import { useContextPaco } from './Context';
import franciaImage from './assets/images/francia.png';
import spainImage from './assets/images/spain.jpg';
import ukImage from './assets/images/uk.png';


const Languages: React.FC = () => {

    const { setLanguage } = useContextPaco();

    function changeContext(country: string): void {        
        setLanguage(country);
    }

  return (
    <div>
        <img className='banderaCSS' src={spainImage} onClick={() => changeContext('spain')}/>
        <img className='banderaCSS' src={franciaImage} onClick={() => changeContext('francia')}/>
        <img className='banderaCSS' src={ukImage} onClick={() => changeContext('uk')}/>
    </div>
  )
}

export default Languages