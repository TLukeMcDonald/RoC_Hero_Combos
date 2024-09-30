// src/components/ComboFilters.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFilter, resetFilters } from '../redux/comboFiltersSlice';
import './../assets/css/ComboFilters.scss';

const ComboFilters = () => {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.comboFilters);

  const handleCheckboxChange = (filterName) => {
    dispatch(toggleFilter({ filterName }));
  };

  const handleReset = () => {
    dispatch(resetFilters());
  };

  return (
    <div className="combo-filters">
      <h3>Filter Combos:</h3>
      <div className="checkbox-group">
        <label>
          <input
            type="checkbox"
            checked={filters.Archers}
            onChange={() => handleCheckboxChange('Archers')}
          />
          Archers
        </label>
        <label>
          <input
            type="checkbox"
            checked={filters.Cavs}
            onChange={() => handleCheckboxChange('Cavs')}
          />
          Cavs
        </label>
        <label>
          <input
            type="checkbox"
            checked={filters.Footmen}
            onChange={() => handleCheckboxChange('Footmen')}
          />
          Footmen
        </label>
        <label>
          <input
            type="checkbox"
            checked={filters.Mixed}
            onChange={() => handleCheckboxChange('Mixed')}
          />
          Mixed
        </label>
        <label>
          <input
            type="checkbox"
            checked={filters.Poison}
            onChange={() => handleCheckboxChange('Poison')}
          />
          Poison
        </label>
      </div>
      <button onClick={handleReset}>Reset Filters</button>
    </div>
  );
};

export default ComboFilters;
