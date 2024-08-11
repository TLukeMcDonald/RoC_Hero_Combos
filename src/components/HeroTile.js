import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addHero, removeHero, toggleFavorite } from '../redux/myHerosSlice';
import HeroImage from './HeroImage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';
import herosData from '../data/herosData.js';
import { getTextColorClass } from '../utils/helperFunctions';
import './../assets/css/HeroTile.css';

const HeroTile = ({ heroKey, showButtons = false }) => {
  const dispatch = useDispatch();
  const copiesHave = useSelector((state) => state.myHeros[heroKey] || 0);
  const heroData = herosData[heroKey] || {};
  const copiesNeeded = heroData.copiesNeed || 4;
  const isFavorite = useSelector((state) => state.myHeros.favorites[heroKey]);

  const textColorClass = getTextColorClass(copiesHave, copiesNeeded);
  const heroCopyDisplay = `${copiesHave > copiesNeeded ? `${copiesNeeded}+` : copiesHave}`;

  const handleAdd = () => {
    dispatch(addHero({ heroKey }));
  };

  const handleRemove = () => {
    dispatch(removeHero({ heroKey }));
  };

  const handleFavorite = () => {
    dispatch(toggleFavorite({ heroKey }));
  };

  return (
    <div className="combo-tile">
      <HeroImage heroKey={heroKey} />
      <button className="favorite-button" onClick={handleFavorite}>
        <FontAwesomeIcon icon={isFavorite ? solidStar : regularStar} />
      </button>
      <div className="hero-copy-display">
        {showButtons && (
          <>
            <button onClick={handleRemove} className="counter-button">-</button>
          </>
        )}
        <span className={textColorClass}>{heroCopyDisplay}</span>
        {showButtons && (
          <button onClick={handleAdd} className="counter-button">+</button>
        )}
      </div>
    </div>
  );
};

export default HeroTile;
