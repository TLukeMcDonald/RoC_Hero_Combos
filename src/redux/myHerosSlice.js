import { createSlice } from '@reduxjs/toolkit';
import initialHeros from '../data/myHeros.js'; // Import initial state

const myHerosSlice = createSlice({
  name: 'myHeros',
  initialState: {
    ...initialHeros,
    favorites: {} // Add a separate key for favorites
  },
  reducers: {
    addHero(state, action) {
      const { heroKey } = action.payload;
      if (state[heroKey]) {
        state[heroKey] += 1;
      } else {
        state[heroKey] = 1;
      }
    },
    removeHero(state, action) {
      const { heroKey } = action.payload;
      if (state[heroKey]) {
        if (state[heroKey] > 1) {
          state[heroKey] -= 1;
        } else {
          delete state[heroKey];
        }
      }
    },
    toggleFavorite(state, action) {
      const { heroKey } = action.payload;
      if (state.favorites[heroKey]) {
        delete state.favorites[heroKey];
      } else {
        state.favorites[heroKey] = true;
      }
    },
  },
});

export const { addHero, removeHero, toggleFavorite } = myHerosSlice.actions;
export default myHerosSlice.reducer;
