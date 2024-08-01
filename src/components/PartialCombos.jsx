import React from 'react';
import combosData from '../data/combosData.json'; 
import myHeros from '../data/myHeros';
import HeroTile from './HeroTile';
import './../assets/css/FilteredCombos.css';

const PartialCombos = () => {
 
 // Filter combosData based on hero availability and copies condition
 const filteredCombos = combosData.filter(combo =>
  combo.heros.some(heroName => {
    return myHeros[heroName]; // Access hero data directly using heroName as key

  })
);

return (
  <div className="filtered-combos">
    <h1 className="completed-combos-title">Partial Combos</h1>
    {filteredCombos.map((combo, index) => (
      <div key={index} className="combo-wrapper">
        <div className="combo-info">
          <div className="combo-rank">Rank: {combo.rank}</div>
          <div className="combo-troop">Troop: {combo.troop}</div>
        </div>

          <HeroTile heroes={combo.heros} heroData={myHeros} />

      </div>
    ))}
  </div>
);
};

export default PartialCombos;