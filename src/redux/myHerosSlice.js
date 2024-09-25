import { createSlice } from '@reduxjs/toolkit';
import { db } from '../firebaseConfig'; // Import your Firebase config
import { collection, getDocs, setDoc, doc } from 'firebase/firestore'; // Firestore functions

// Initial state can be empty or based on your requirement
const initialState = {
  castles: {},
  currentCastle: 'Eardstapa',
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
      state.castles = action.payload; // Set the castles data from Firestore
    },
  },
});

// Async function to fetch initial data from Firestore
export const fetchInitialData = () => async (dispatch) => {
  console.log("Fetch API data");
  try {
    const querySnapshot = await getDocs(collection(db, 'castles')); // Fetch all castles
    const castlesData = {};

    querySnapshot.forEach((doc) => {
      castlesData[doc.id] = doc.data(); // Store data in castlesData
    });
console.log(castlesData);
    dispatch(myHerosSlice.actions.setInitialData(castlesData)); // Dispatch the action to set castles
  } catch (error) {
    console.error("Error fetching data from Firestore:", error);
  }
};

export const { addHero, removeHero, toggleFavorite, setCastle, setInitialData } = myHerosSlice.actions;
export default myHerosSlice.reducer;
