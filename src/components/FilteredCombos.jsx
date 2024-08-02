import React from 'react';
import HeroTile from './HeroTile';
import './../assets/css/FilteredCombos.css';
import './../assets/css/HeroTile.css';

const FilteredCombos = ({ combos }) => {
  return (
    <div className="filtered-combos">
      {combos.map((combo, index) => (
        <div key={index} className="combo-wrapper">
          <div className="combo-tile">
            <div className="combo-text">Rank: {combo.rank}</div>
            <div className="combo-text">Troop: {combo.troop}</div>
          </div>
          <div className="hero-tiles-wrapper">
            {combo.heros.map(heroName => (
              <HeroTile key={heroName} heroName={heroName} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FilteredCombos;