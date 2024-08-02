import { configureStore } from '@reduxjs/toolkit';
import myHerosReducer from './myHerosSlice';

const store = configureStore({
  reducer: {
    myHeros: myHerosReducer,
  },
});

export default store;