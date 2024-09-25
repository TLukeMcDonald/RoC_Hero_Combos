import { createSlice } from '@reduxjs/toolkit';
import { db } from '../firebaseConfig'; // Import your Firebase config
import { collection, getDocs, setDoc, doc } from 'firebase/firestore'; // Firestore functions

const initialState = {
  castles: {},
  currentCastle: '',
  isLoaded: false,
  error: null, // Add error state
};


const myHerosSlice = createSlice({
  name: 'myHeros',
  initialState,
  reducers: {
    setCastle(state, action) {
      state.currentCastle = action.payload;
    },
    addHero(state, action) {
      const { heroKey } = action.payload;
      const currentSet = state.castles[state.currentCastle];

      // Ensure myHeros exists
      if (!currentSet.myHeros) {
        currentSet.myHeros = {};
      }

      // Update hero count
      if (currentSet.myHeros[heroKey]) {
        currentSet.myHeros[heroKey] += 1;
      } else {
        currentSet.myHeros[heroKey] = 1;
      }

      // Write to Firestore
      setDoc(doc(db, 'castles', state.currentCastle), currentSet);
    },
    removeHero(state, action) {
      const { heroKey } = action.payload;
      const currentSet = state.castles[state.currentCastle];

      if (currentSet.myHeros && currentSet.myHeros[heroKey]) {
        if (currentSet.myHeros[heroKey] > 1) {
          currentSet.myHeros[heroKey] -= 1;
        } else {
          delete currentSet.myHeros[heroKey];
        }
      }

      // Write to Firestore
      setDoc(doc(db, 'castles', state.currentCastle), currentSet);
    },
    toggleFavorite(state, action) {
      const { heroKey } = action.payload;
      const currentSet = state.castles[state.currentCastle];

      if (!currentSet.favorites) {
        currentSet.favorites = {};
      }

      if (currentSet.favorites[heroKey]) {
        delete currentSet.favorites[heroKey];
      } else {
        currentSet.favorites[heroKey] = true;
      }

      // Write to Firestore
      setDoc(doc(db, 'castles', state.currentCastle), currentSet);
    },
    setInitialData(state, action) {
      state.castles = action.payload.castles; // Set castles data
      state.currentCastle = action.payload.firstCastle; // Set the first castle as currentCastle
    },
    setLoaded(state, action) {
      state.isLoaded = action.payload; // Set loading state
    },
    setError(state, action) {
      state.error = action.payload; // Set the error message
    }
  },
});

// Async function to fetch initial data from Firestore
export const fetchInitialData = () => async (dispatch, getState) => {
  dispatch(myHerosSlice.actions.setLoaded(false));

  try {
    const querySnapshot = await getDocs(collection(db, 'castles'));
    const castlesData = {};
    
    // Initialize firstCastle based on current state
    let firstCastle = getState().myHeros.currentCastle || ''; 

    querySnapshot.forEach((doc) => {
      castlesData[doc.id] = doc.data();

      // If firstCastle is empty, set the first castle from the query
      if (!firstCastle) {
        firstCastle = doc.id;
      }
    });

    dispatch(myHerosSlice.actions.setInitialData({ castles: castlesData, firstCastle }));
  } catch (error) {
    console.error("Error fetching data from Firestore:", error);
    dispatch(myHerosSlice.actions.setError(error.message)); // Set the error state
  } finally {
    dispatch(myHerosSlice.actions.setLoaded(true));
  }
};



export const { addHero, removeHero, toggleFavorite, setCastle, setInitialData, setLoaded } = myHerosSlice.actions;
export default myHerosSlice.reducer;
