import React from 'react';
import { useSelector } from 'react-redux';
import herosData from '../data/herosData.js';
import HeroImage from './HeroImage'; // Import the new HeroImage component
import './../assets/css/HeroTile.css';

const HeroTile = ({ heroName }) => {
  const myHeros = useSelector(state => state.myHeros);

  const copiesHave = myHeros[heroName] || 0;
  const heroData = herosData[heroName] || {};
  const copiesNeeded = heroData.copiesNeed || 4;
  const heroDisplayName = `(${copiesHave > copiesNeeded ? `${copiesNeeded}+` : copiesHave})`;

  return (
    <div className="combo-tile">
      <HeroImage heroName={heroName} />
      <div className="combo-text">{heroDisplayName}</div>
    </div>
  );
};

export default HeroTile;