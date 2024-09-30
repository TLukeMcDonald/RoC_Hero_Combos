// src/components/MultiSelectDropdown.js
import React from 'react';
import Select from 'react-select';
import '../assets/css/MultiSelectDropdown.scss'; // Create this file for styles

const MultiSelectDropdown = ({ options, selectedOptions, onChange, label }) => {
  const handleChange = (selected) => {
    // Extracting the values from the selected options
    const selectedValues = selected ? selected.map(option => option.value) : [];
    onChange(selectedValues);
  };

  return (
    <div className="multi-select-dropdown">
      <label>{label}</label>
      <Select
        isMulti
        options={options}
        value={options.filter(option => selectedOptions.includes(option.value))}
        onChange={handleChange}
        className="basic-multi-select"
        classNamePrefix="select"
      />
    </div>
  );
};

export default MultiSelectDropdown;
