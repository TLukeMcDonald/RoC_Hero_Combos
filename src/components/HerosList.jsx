import React from 'react';
import { useSelector } from 'react-redux';
import HeroTile from './HeroTile';
import herosData from '../data/herosData.js';
import './../assets/css/HeroTile.css';

const HerosList = () => {
  const myHeros = useSelector((state) => state.myHeros);
  const favoriteKeys = Object.keys(myHeros.favorites || {});

  const ownedHeros = {};
  favoriteKeys.forEach(heroKey => {
    ownedHeros[heroKey] = herosData[heroKey];
  });

  Object.keys(herosData).forEach(heroKey => {
    if (myHeros[heroKey]) {
      ownedHeros[heroKey] = herosData[heroKey];
    }
  });

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
          <HeroTile key={hero.key} heroKey={hero.key} showButtons={true} />
        ))}
        {nonFavoriteHeros.map(hero => (
          <HeroTile key={hero.key} heroKey={hero.key} showButtons={true} />
        ))}
      </div>
      <h2>Not Owned Heroes</h2>
      <div className="hero-tiles-wrapper">
        {notOwnedHeros.map(hero => (
          <HeroTile key={hero.key} heroKey={hero.key} showButtons={true} />
        ))}
      </div>
    </div>
  );
};

export default HerosList;
