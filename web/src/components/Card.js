import React from 'react';

import './components.css';

const DogFactCard = ({ fact }) => {

  return (
    <div>
       <div className='fact-text' >{fact.fact}</div>
    </div>
  );
}

export default DogFactCard;