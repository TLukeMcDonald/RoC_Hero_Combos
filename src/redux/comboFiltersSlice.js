// src/redux/comboFiltersSlice.js
import { createSlice } from '@reduxjs/toolkit';

const comboFiltersSlice = createSlice({
  name: 'comboFilters',
  initialState: {
    troopTypes: {
      Archer: false,
      Cavs: false,
      Footmen: false,
      Mixed: false,
      Poison: false,
    },
    seasons: {
      Spring: false,
      Summer: false,
      Fall: false,
      Winter: false,
    },
    heroes: {
      Hero1: false,
      Hero2: false,
      Hero3: false,
      Hero4: false,
    },
  },
  reducers: {
    toggleFilter: (state, action) => {
      const { category, filterName } = action.payload;
      state[category][filterName] = !state[category][filterName];
    },
    resetFilters: (state) => {
      Object.keys(state).forEach((category) => {
        Object.keys(state[category]).forEach((key) => {
          state[category][key] = false;
        });
      });
    },
  },
});

export const { toggleFilter, resetFilters } = comboFiltersSlice.actions;
export default comboFiltersSlice.reducer;
