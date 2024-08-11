import React from 'react';
import { useSelector } from 'react-redux';
import SelectionTile from './SelectionTile';
import herosData from '../data/herosData.js';
import './../assets/css/HeroTile.css';

const HerosList = () => {
  const myHeros = useSelector((state) => state.myHeros);
  const favoriteKeys = Object.keys(myHeros.favorites || {});

  // Combine all owned heroes and favorites into one object
  const ownedHeros = {};
  favoriteKeys.forEach(heroKey => {
    ownedHeros[heroKey] = herosData[heroKey];
  });

  Object.keys(herosData).forEach(heroKey => {
    if (myHeros[heroKey]) {
      ownedHeros[heroKey] = herosData[heroKey];
    }
  });

  // Separate the owned heroes into favorite and non-favorite arrays
  const favoriteHeros = favoriteKeys.map(key => ({
    key,
    ...herosData[key],
  })).filter(hero => hero.key in ownedHeros);

  const nonFavoriteHeros = Object.keys(ownedHeros)
    .filter(key => !favoriteKeys.includes(key))
    .map(key => ({
      key,
      ...herosData[key],
    }));

  const notOwnedHeros = Object.keys(herosData)
    .filter(key => !myHeros[key] && !favoriteKeys.includes(key))
    .map(key => ({
      key,
      ...herosData[key],
    }));

  return (
    <div>
      <h1>My Hero's List</h1>
      <div className="hero-tiles-wrapper">
        {favoriteHeros.map(hero => (
          <SelectionTile key={hero.key} heroKey={hero.key} />
        ))}
        {nonFavoriteHeros.map(hero => (
          <SelectionTile key={hero.key} heroKey={hero.key} />
        ))}
      </div>
      <h2>Not Owned Heroes</h2>
      <div className="hero-tiles-wrapper">
        {notOwnedHeros.map(hero => (
          <SelectionTile key={hero.key} heroKey={hero.key} />
        ))}
      </div>
    </div>
  );
};

export default HerosList;
