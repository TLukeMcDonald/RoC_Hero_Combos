import { createSlice } from '@reduxjs/toolkit';
import initialHeros from '../data/myHeros.js';


const initialState = {
  castles: {
    ...initialHeros
  },
  currentCastle: 'Eardstapa'
};

const myHerosSlice = createSlice({
  name: 'myHeros',
  initialState,
  reducers: {
    addHero(state, action) {
      const { heroKey } = action.payload;
      const currentSet = state.castles[state.currentCastle];
      if (currentSet.myHeros[heroKey]) {
        currentSet.myHeros[heroKey] += 1;
      } else {
        currentSet.myHeros[heroKey] = 1;
      }
    },
    removeHero(state, action) {
      const { heroKey } = action.payload;
      const currentSet = state.castles[state.currentCastle];
      if (currentSet.myHeros[heroKey]) {
        if (currentSet.myHeros[heroKey] > 1) {
          currentSet.myHeros[heroKey] -= 1;
        } else {
          delete currentSet.myHeros[heroKey];
        }
      }
    },
    toggleFavorite(state, action) {
      const { heroKey } = action.payload;
      const currentSet = state.castles[state.currentCastle];
      if (currentSet.favorites[heroKey]) {
        delete currentSet.favorites[heroKey];
      } else {
        currentSet.favorites[heroKey] = true;
      }
    },
    setCastle(state, action) {
      state.currentCastle = action.payload;
    },
  },
});

export const { addHero, removeHero, toggleFavorite, setCastle } = myHerosSlice.actions;
export default myHerosSlice.reducer;