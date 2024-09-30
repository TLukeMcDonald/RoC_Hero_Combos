// src/redux/comboFiltersSlice.js
import { createSlice } from '@reduxjs/toolkit';

const comboFiltersSlice = createSlice({
  name: 'comboFilters',
  initialState: {
    Archers: false,
    Cavs: false,
    Footmen: false,
    Mixed: false,
    Poison: false,
  },
  reducers: {
    toggleFilter: (state, action) => {
      const { filterName } = action.payload;
      state[filterName] = !state[filterName];
    },
    resetFilters: (state) => {
      Object.keys(state).forEach((key) => {
        state[key] = false;
      });
    },
  },
});

export const { toggleFilter, resetFilters } = comboFiltersSlice.actions;
export default comboFiltersSlice.reducer;
