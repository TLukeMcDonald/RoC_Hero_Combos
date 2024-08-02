import React from 'react';
import myHeros from '../data/myHeros.js'; // Ensure the correct path to myHeros
import './../assets/css/HeroTile.css';

const HeroTile = ({ heroName }) => {
  // Function to get the image URL for the hero
  const getHeroImage = (heroName) => {
    try {
      // Attempt to load the image
      return require(`../assets/images/${heroName}.jpg`); // Adjust for Webpack compatibility
    } catch (e) {
      // Fallback to empty string for background color in CSS
      return '';
    }
  };

  const heroImage = getHeroImage(heroName);
  const heroDisplayName = `${heroName} (${myHeros[heroName] || 0})`;

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