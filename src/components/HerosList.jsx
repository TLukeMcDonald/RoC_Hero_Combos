import React from 'react';
import herosData from '../data/herosData.js'; 

const HerosList = () => {
  return (
    <div>
      <h1>My Hero's List</h1>
      <ul>
      {Object.values(herosData).map(hero => (
          <li key={hero.name}>
            {hero.name}, {hero.type}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HerosList;