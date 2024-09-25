import { configureStore } from '@reduxjs/toolkit';
import myHerosReducer from './myHerosSlice';

const store = configureStore({
  reducer: {
    myHeros: myHerosReducer,
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware({ serializableCheck: false }), // If you're storing non-serializable values
});

export default store;