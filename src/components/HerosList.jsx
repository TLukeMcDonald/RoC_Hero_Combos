import React from 'react';
import SelectionTile from './SelectionTile';
import { useSelector } from 'react-redux';
import herosData from '../data/herosData.js';
import './../assets/css/HeroTile.css';

const HerosList = () => {
  const myHeros = useSelector((state) => state.myHeros);

  // Initialize empty objects to store owned and not owned heroes
  const ownedHeros = {};
  const notOwnedHeros = {};

  // Iterate over herosData keys and classify heroes into owned and not owned objects
  Object.keys(herosData).forEach(heroKey => {
    if (myHeros[heroKey]) {
      ownedHeros[heroKey] = herosData[heroKey];
    } else {
      notOwnedHeros[heroKey] = herosData[heroKey];
    }
  });

  return (
    <div>
      <h1>My Hero's List</h1>
      <div className="hero-tiles-wrapper">
        {Object.keys(ownedHeros).map(heroKey => (
          <SelectionTile key={heroKey} heroKey={heroKey} />
        ))}
      </div>
      <div className="hero-tiles-wrapper">
        {Object.keys(notOwnedHeros).map(heroKey => (
          <SelectionTile key={heroKey} heroKey={heroKey} />
        ))}
      </div>
    </div>
  );
};

export default HerosList;