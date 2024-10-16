// src/components/ComboFilters.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';
import { toggleFilter, resetFilters } from '../redux/comboFiltersSlice';
import { TROOPTYPE } from '../data/typeConstants'; // Ensure you import TROOPTYPE
import './../assets/css/ComboFilters.scss';

// Sample options for Seasons and Heroes
const seasonOptions = [
  { value: 'Spring', label: 'Spring' },
  { value: 'Summer', label: 'Summer' },
  { value: 'Fall', label: 'Fall' },
  { value: 'Winter', label: 'Winter' },
];

const heroOptions = [
  { value: 'Hero1', label: 'Hero1' },
  { value: 'Hero2', label: 'Hero2' },
  { value: 'Hero3', label: 'Hero3' },
  { value: 'Hero4', label: 'Hero4' },
];

const paidOptions = [
  { value: 'paid', label: 'Paid Heros' },
  { value: 'notPaid', label: 'Free Heros' },
];

const customStyles = {
  menu: (provided) => ({
    ...provided,
    zIndex: 100, 
  }),
};

const ComboFilters = () => {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.comboFilters);

  // Convert TROOPTYPE object to an array of options for the Select component
  const troopTypeOptions = Object.entries(TROOPTYPE).map(([key, value]) => ({
    value,
    label: value,
  }));

  // Function to handle filter change for each dropdown
  const handleChange = (selectedOptions, category) => {
    const selectedValues = selectedOptions.map(option => option.value);

    // Update filters in Redux
    Object.keys(filters[category]).forEach((filterName) => {
      const isChecked = selectedValues.includes(filterName);
      if (filters[category][filterName] !== isChecked) {
        dispatch(toggleFilter({ category, filterName }));
      }
    });
  };

  const handleReset = () => {
    dispatch(resetFilters());
  };

  return (
    <div className="combo-filters">
      <h3>Filter Combos:</h3>

      {/* Troop Types Dropdown */}
      <Select
        isMulti
        options={troopTypeOptions}
        value={troopTypeOptions.filter(option => filters.troopTypes[option.value])}
        onChange={(selected) => handleChange(selected, 'troopTypes')}
        className="react-select"
        classNamePrefix="select"
        placeholder="Select Troop Types..."
        styles={customStyles}
      />

      {/* Seasons Dropdown */}
      <Select
        isMulti
        options={seasonOptions}
        value={seasonOptions.filter(option => filters.seasons[option.value])}
        onChange={(selected) => handleChange(selected, 'seasons')}
        className="react-select"
        classNamePrefix="select"
        placeholder="Select Seasons..."
        styles={customStyles}
      />

      {/* Heroes Dropdown */}
      <Select
        isMulti
        options={heroOptions}
        value={heroOptions.filter(option => filters.heroes[option.value])}
        onChange={(selected) => handleChange(selected, 'heroes')}
        className="react-select"
        classNamePrefix="select"
        placeholder="Select Heroes..."
        styles={customStyles}
      />
      
      {/* Paid Heros Dropdown */}
      <Select
        isMulti
        options={paidOptions}
        value={paidOptions.filter(option => filters.paid[option.value])}
        onChange={(selected) => handleChange(selected, 'paid')}
        className="react-select"
        classNamePrefix="select"
        placeholder="Paid or F2P"
        styles={customStyles}
      />

      <button onClick={handleReset}>Reset Filters</button>
    </div>
  );
};

export default ComboFilters;
