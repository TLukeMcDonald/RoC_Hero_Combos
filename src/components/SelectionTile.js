import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addHero, removeHero } from '../redux/myHerosSlice';
import HeroImage from './HeroImage'; // Import the HeroImage component
import herosData from '../data/herosData.js';
import './../assets/css/HeroTile.css';

const SelectionTile = ({ heroName }) => {
  const dispatch = useDispatch();
  const copiesHave = useSelector((state) => state.myHeros[heroName] || 0);
  const heroData = herosData[heroName] || {};
  const copiesNeeded = heroData.copiesNeed || 4;

  const handleAdd = () => {
    dispatch(addHero({ heroName }));
  };

  const handleRemove = () => {
    dispatch(removeHero({ heroName }));
  };

  return (
    <div className="combo-tile">
      <HeroImage heroName={heroName} />
      <div className="combo-text">
        <button onClick={handleRemove} className="counter-button">-</button>
        {copiesHave > copiesNeeded ? `${copiesNeeded}+` : copiesHave}
        <button onClick={handleAdd} className="counter-button">+</button>
      </div>
    </div>
  );
};

export default SelectionTile;