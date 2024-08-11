import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';
import { toggleFavorite } from '../redux/myHerosSlice'; // Ensure this action is imported
import HeroImage from './HeroImage'; // Import the HeroImage component
import herosData from '../data/herosData.js';
import { getTextColorClass } from '../utils/helperFunctions'; // Import the helper function
import './../assets/css/HeroTile.css';

const HeroTile = ({ heroName }) => {
  const dispatch = useDispatch();
  const myHeros = useSelector(state => state.myHeros);
  const heroData = herosData[heroName] || {};
  const copiesHave = myHeros[heroName] || 0;
  const copiesNeeded = heroData.copiesNeed || 4;
  const isFavorite = useSelector(state => state.myHeros.favorites[heroName]);

  const textColorClass = getTextColorClass(copiesHave, copiesNeeded);
  const heroCopyDisplay = `${copiesHave > copiesNeeded ? `${copiesNeeded}+` : copiesHave}`;

  const handleFavorite = () => {
    dispatch(toggleFavorite({ heroKey: heroName }));
  };

  return (
    <div className="combo-tile">
      <HeroImage heroKey={heroName} />
      <button className="favorite-button" onClick={handleFavorite}>
        <FontAwesomeIcon icon={isFavorite ? solidStar : regularStar} />
      </button>
      <div className={`hero-copy-display ${textColorClass}`}>{heroCopyDisplay}</div>
    </div>
  );
};

export default HeroTile;
