import { createSlice } from '@reduxjs/toolkit';
import initialHeros from '../data/myHeros.js'; // Import initial state

const myHerosSlice = createSlice({
  name: 'myHeros',
  initialState: initialHeros,
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
  },
});

export const { addHero, removeHero } = myHerosSlice.actions;
export default myHerosSlice.reducer;