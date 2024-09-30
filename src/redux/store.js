// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import myHerosReducer from './myHerosSlice';
import comboFiltersReducer from './comboFiltersSlice';

const store = configureStore({
  reducer: {
    myHeros: myHerosReducer,
    comboFilters: comboFiltersReducer,
  },
});

export default store;
