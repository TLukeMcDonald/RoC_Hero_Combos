import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addHero, removeHero } from '../redux/myHerosSlice';
import HeroImage from './HeroImage'; // Import the HeroImage component
import herosData from '../data/herosData.js';
import './../assets/css/HeroTile.css';

const SelectionTile = ({ heroKey }) => {
  const dispatch = useDispatch();
  const copiesHave = useSelector((state) => state.myHeros[heroKey] || 0);
  const heroData = herosData[heroKey] || {};
  const copiesNeeded = heroData.copiesNeed || 4;

  const handleAdd = () => {
    dispatch(addHero({ heroKey }));
  };

  const handleRemove = () => {
    dispatch(removeHero({ heroKey }));
  };

  return (
    <div className="combo-tile">
      <HeroImage heroKey={heroKey} />
      <div className="combo-text">
        <button onClick={handleRemove} className="counter-button">-</button>
        {copiesHave > copiesNeeded ? `${copiesNeeded}+` : copiesHave}
        <button onClick={handleAdd} className="counter-button">+</button>
      </div>
    </div>
  );
};

export default SelectionTile;