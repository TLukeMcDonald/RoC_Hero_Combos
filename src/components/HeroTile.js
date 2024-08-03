import React from 'react';
import { useSelector } from 'react-redux'; // Import useSelector for accessing Redux state
import herosData from '../data/herosData.js'; // Import herosData
import './../assets/css/HeroTile.css';

const HeroTile = ({ heroName }) => {
  const myHeros = useSelector(state => state.myHeros); // Access the myHeros state from Redux

  // Function to get the image URL for the hero
  const getHeroImage = (heroName) => {
    try {
      // Attempt to load the image
      return require(`../assets/images/${heroName}.jpg`);
    } catch (e) {
      // Fallback to empty string for background color in CSS
      return '';
    }
  };

  const heroImage = getHeroImage(heroName);

  const copiesHave = myHeros[heroName] || 0;
  const heroData = herosData[heroName] || {};
  const copiesNeeded = heroData.copiesNeed || 4;
  const heroDisplayName = `${heroName} (${copiesHave > copiesNeeded ? `${copiesNeeded}+` : copiesHave})`;

  return (
    <div className="combo-tile">
      <div
        className="hero-image"
        style={{ backgroundImage: heroImage ? `url(${heroImage})` : 'none' }}
      />
      <div className="combo-text">{heroDisplayName}</div>
    </div>
  );
};

export default HeroTile;