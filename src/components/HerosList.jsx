import React from 'react';
import { useSelector } from 'react-redux';
import HeroTile from './HeroTile';
import herosData from '../data/herosData.js';
import './../assets/css/HeroTile.scss';
import '../assets/css/HerosList.scss'

const HerosList = () => {
  const currentCastle = useSelector((state) => state.myHeros.currentCastle);
  const myHeros = useSelector((state) => state.myHeros?.castles[currentCastle]?.myHeros) || {};
  const favorites = useSelector((state) => state.myHeros?.castles[currentCastle]?.favorites) || {};
  const favoriteKeys = Object.keys(favorites);
  const ownedHeros = {};

  // Populate ownedHeros with favorites and owned heroes
  favoriteKeys.forEach(heroKey => {
    ownedHeros[heroKey] = herosData[heroKey];
  });

  Object.keys(herosData).forEach(heroKey => {
    if (myHeros[heroKey]) {
      ownedHeros[heroKey] = herosData[heroKey];
    }
  });

  // Filter heroes into favorites and non-favorites
  const favoriteHeros = favoriteKeys.map(key => ({
    key,
    ...herosData[key],
  })).filter(hero => hero.key in ownedHeros);

  const OwnedNonFavoriteHeros = Object.keys(ownedHeros)
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
    <div className='heros-list'>
      <h1>{currentCastle} Heroes List</h1>
      <div className="hero-tiles-wrapper">
        {favoriteHeros.map(hero => (
          <HeroTile key={hero.key} heroKey={hero.key} showButtons={true} />
        ))}
        {OwnedNonFavoriteHeros.map(hero => (
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
