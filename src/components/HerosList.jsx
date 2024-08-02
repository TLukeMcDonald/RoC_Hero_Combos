import React from 'react';
import SelectionTile from './SelectionTile';
import herosData from '../data/herosData.js';
import { useSelector } from 'react-redux';
import './../assets/css/HeroTile.css';

const HerosList = () => {
  const myHeros = useSelector((state) => state.myHeros);

  const sortedHeros = Object.values(herosData).sort((a, b) => {
    return (myHeros[b.name] || 0) - (myHeros[a.name] || 0);
  });

  const haveHeros = sortedHeros.filter(hero => myHeros[hero.name]);
  const doNotHaveHeros = sortedHeros.filter(hero => !myHeros[hero.name]);

  return (
    <div>
      <h1>My Hero's List</h1>
      <div className="hero-tiles-wrapper">
        {haveHeros.map(hero => (
          <SelectionTile key={hero.name} heroName={hero.name} />
        ))}
      </div>
      <div className="hero-tiles-wrapper">
        {doNotHaveHeros.map(hero => (
          <SelectionTile key={hero.name} heroName={hero.name} />
        ))}
      </div>
    </div>
  );
};

export default HerosList;