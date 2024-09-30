//src/components/FilteredCombos.jsx
import React from 'react';
import HeroTile from './HeroTile';
import './../assets/css/FilteredCombos.scss';
import './../assets/css/HeroTile.scss';

const FilteredCombos = ({ combos }) => {
  const renderComboTile = (combo) => (
    <div className="combo-tile">
      {combo.freeRank && <div className="combo-text">Free Rank: {combo.freeRank}</div>}
      {combo.rank && <div className="combo-text">Paid Rank: {combo.rank}</div>}
      <div className="combo-text">Troop: {combo.troop}</div>
    </div>
  );

  const renderHeroTiles = (heros) => (
    <div className="hero-tiles-wrapper">
      {heros.map((heroKey, heroIndex) => (
        <HeroTile key={`hero-${heroKey}-${heroIndex}`} heroKey={heroKey} showButtons={false} />
      ))}
    </div>
  );

  return (
    <div className="filtered-combos">
      {combos.map((combo, index) => (
        <div key={`combo-${index}`} className="combo-wrapper">
          {renderComboTile(combo)}
          {renderHeroTiles(combo.heros)}
        </div>
      ))}
    </div>
  );
};

export default FilteredCombos;
