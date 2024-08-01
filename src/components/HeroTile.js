import React from 'react';
import PropTypes from 'prop-types';
import '../assets/css/HeroTile.css'; // Path for CSS file
import myHeros from './../data/myHeros';

const HeroTile = ({ heroes, heroData }) => {

  const getHeroImage = (heroName) => {
    try {
        // Attempt to load the image
        return require(`../assets/images/${heroName}.jpg`);
    } catch (e) {
        // Fallback to a blank image
        return '';
    }
  };



  return (
    <>
      {heroes.map(heroName => {
        const heroImage = getHeroImage(heroName);
        const hero = heroData[heroName];
        const copiesHave = myHeros[heroName] || 0;
        const heroDisplayName = `${heroName} (${copiesHave})`;

        return (
          <div key={heroName} className="combo-tile">
            <div
              className="hero-image"
              style={{ backgroundImage: heroImage ? `url(${heroImage})` : 'none' }}
            />
            <div className="hero-text">{heroDisplayName}</div>
          </div>
        );
      })}
    </>
  );
};

HeroTile.propTypes = {
  heroes: PropTypes.arrayOf(PropTypes.string).isRequired,
  heroData: PropTypes.objectOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      copiesHave: PropTypes.number.isRequired,
      copiesNeed: PropTypes.number.isRequired
    })
  ).isRequired,
};

export default HeroTile;
