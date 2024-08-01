import React from 'react';
import combosData from '../data/combosData.json'; 
import herosData from '../data/herosData.js';
import myHeros from '../data/myHeros.js';
import HeroTile from './HeroTile';
import './../assets/css/FilteredCombos.css';
import './../assets/css/HeroTile.css';

const CompletedCombos = () => {
  // Filter combosData based on hero availability and copies condition
  const filteredCombos = combosData.filter(combo =>
    combo.heros.every(heroName => {
      const heroCopiesHave = myHeros[heroName]; // Access hero copies from myHeros
      const heroNeedCopies = herosData[heroName]?.copiesNeed; // Access needed copies from herosData
      // Return true if the hero exists and has enough copies
      return heroCopiesHave && heroCopiesHave >= heroNeedCopies;
    })
  );

  return (
    <div className="filtered-combos">
      <h1 className="completed-combos-title">Completed Combos</h1>
      {filteredCombos.map((combo, index) => (
        <div key={index} className="combo-wrapper">
          <div className="combo-tile">
            <div className="hero-text">Rank: {combo.rank}</div>
            <div className="hero-text">Troop: {combo.troop}</div>
          </div>
          <HeroTile heroes={combo.heros} heroData={herosData} />
        </div>
      ))}
    </div>
  );
};

export default CompletedCombos;