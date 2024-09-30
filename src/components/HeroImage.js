import React from 'react';
import './../assets/css/HeroImage.scss'; // Assuming the CSS is located here
import herosData from '../data/herosData.js'; // Import herosData to access the pictureLink

const HeroImage = ({ heroKey }) => {
  const heroData = herosData[heroKey] || {}; // Fallback to an empty object if heroKey is not found

  // Function to get the image URL using the pictureLink
  const getHeroImage = (pictureLink) => {
    try {
      // Attempt to load the image
      return require(`../assets/images/${pictureLink}`);
    } catch (e) {
      // Fallback to empty string for background color in CSS
      return '';
    }
  };

  const heroImage = getHeroImage(heroData.pictureLink);
  const heroName = heroData.name || heroKey; // Default to heroKey if name is not available

  return (
    <div className="hero-image-container">
      <div
        className={`hero-image ${!heroImage ? 'hero-image-fallback' : ''}`}
        style={{ backgroundImage: heroImage ? `url(${heroImage})` : 'none' }}
      >
        {!heroImage && (
          <div className="fallback-text">
            {heroName}
          </div>
        )}
        <div className="hero-hover-text">
          {heroName}
        </div>
      </div>
    </div>
  );
};

export default HeroImage;