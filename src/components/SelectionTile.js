import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addHero, removeHero } from '../redux/myHerosSlice'; // Ensure this path is correct
import './../assets/css/HeroTile.css';

const SelectionTile = ({ heroName }) => {
  const dispatch = useDispatch();
  const copiesHave = useSelector((state) => state.myHeros[heroName] || 0);

  const handleAdd = () => {
    dispatch(addHero({ heroName }));
  };

  const handleRemove = () => {
    dispatch(removeHero({ heroName }));
  };

  const heroImage = getHeroImage(heroName);

  return (
    <div className="combo-tile">
      <div
        className="hero-image"
        style={{ backgroundImage: heroImage ? `url(${heroImage})` : 'none' }}
      />
      <div className="combo-text">{heroName}</div>
      <div className="combo-text">
        <button onClick={handleRemove}>-</button>
        {copiesHave}
        <button onClick={handleAdd}>+</button>
      </div>
    </div>
  );
};

const getHeroImage = (heroName) => {
  try {
    return require(`../assets/images/${heroName}.jpg`);
  } catch (e) {
    return '';
  }
};

export default SelectionTile;