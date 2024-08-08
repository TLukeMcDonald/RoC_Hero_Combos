import React from 'react';
import { useSelector } from 'react-redux';
import herosData from '../data/herosData.js';
import HeroImage from './HeroImage'; // Import the HeroImage component
import './../assets/css/HeroTile.css';

const HeroTile = ({ heroName }) => {
  const myHeros = useSelector(state => state.myHeros);

  // Get hero data from herosData
  const heroData = herosData[heroName] || {};
  const copiesHave = myHeros[heroName] || 0;
  const copiesNeeded = heroData.copiesNeed || 4;

  // Format the display name based on the number of copies
  const heroDisplayName = `(${copiesHave > copiesNeeded ? `${copiesNeeded}+` : copiesHave})`;

  return (
    <div className="combo-tile">
      <HeroImage heroKey={heroName} /> {/* Use heroKey here */}
      <div className="combo-text">{heroDisplayName}</div>
    </div>
  );
};

export default HeroTile;