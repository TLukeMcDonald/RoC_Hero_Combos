import React from 'react';
import FilteredCombos from './FilteredCombos';
import './../assets/css/FilteredCombos.scss';

const CombosDisplay = ({ completedCombos, partialCombos }) => {
  return (
    <div className="filtered-combos-container">
      <div className="filtered-combos-title">Completed or Favorite Combos</div>
      <FilteredCombos combos={completedCombos} />
      <div className="filtered-combos-title">Partial Combos</div>
      <FilteredCombos combos={partialCombos} />
    </div>
  );
};

export default CombosDisplay;
