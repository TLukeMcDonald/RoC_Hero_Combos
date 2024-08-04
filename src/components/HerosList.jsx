import React from 'react';
import SelectionTile from './SelectionTile';
import { useSelector } from 'react-redux';
import herosData from '../data/herosData.js';
import './../assets/css/HeroTile.css';

const HerosList = () => {
  const myHeros = useSelector((state) => state.myHeros);

  // Sort heroes by whether or not they are in myHeros, but maintain stable order within each group
  const ownedHeros = [];
  const notOwnedHeros = [];

  Object.values(herosData).forEach(hero => {
    if (myHeros[hero.name]) {
      ownedHeros.push(hero);
    } else {
      notOwnedHeros.push(hero);
    }
  });

  return (
    <div>
      <h1>My Hero's List</h1>
      <div className="hero-tiles-wrapper">
        {ownedHeros.map(hero => (
          <SelectionTile key={hero.name} heroName={hero.name} />
        ))}
      </div>
      <div className="hero-tiles-wrapper">
        {notOwnedHeros.map(hero => (
          <SelectionTile key={hero.name} heroName={hero.name} />
        ))}
      </div>
    </div>
  );
};

export default HerosList;