import { createSlice } from '@reduxjs/toolkit';
import initialHeros from '../data/myHeros.js'; // Import initial state

const myHerosSlice = createSlice({
  name: 'myHeros',
  initialState: initialHeros,
  reducers: {
    addHero(state, action) {
      const { heroName } = action.payload;
      if (state[heroName]) {
        state[heroName] += 1;
      } else {
        state[heroName] = 1;
      }
    },
    removeHero(state, action) {
      const { heroName } = action.payload;
      if (state[heroName]) {
        if (state[heroName] > 1) {
          state[heroName] -= 1;
        } else {
          delete state[heroName];
        }
      }
    },
  },
});

export const { addHero, removeHero } = myHerosSlice.actions;
export default myHerosSlice.reducer;