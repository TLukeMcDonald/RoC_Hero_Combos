import React from 'react';
import './../assets/css/HeroImage.css'; // Create a separate CSS file for this component

const HeroImage = ({ heroName }) => {
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

  return (
    <div className="hero-image-container">
      {heroImage ? (
        <div
          className="hero-image"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
      ) : (
        <div className="hero-image-fallback">
          {heroName}
        </div>
      )}
    </div>
  );
};

export default HeroImage;