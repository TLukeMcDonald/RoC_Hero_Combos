import { createSlice } from '@reduxjs/toolkit';
import { db, auth } from '../firebaseConfig'; 
import { collection, getDocs, setDoc, doc } from 'firebase/firestore';

const initialState = {
  castles: {},
  sortedCastles: [],
  currentCastle: '',
  isLoaded: false,
  error: null,
};

const myHerosSlice = createSlice({
  name: 'myHeros',
  initialState,
  reducers: {
    setCastle(state, action) {
      state.currentCastle = action.payload;
    },    
    addCastle(state, action) {
      const castleName = action.payload;
      if (!state.castles[castleName]) {
        state.castles[castleName] = { myHeros: {}, favorites: {}, castleOrder: state.sortedCastles.length+1}; // Initialize new castle with placeholders
      }
      state.currentCastle = castleName; // Set current castle to the new one
      state.sortedCastles = [...state.sortedCastles, castleName];
    },
    
    addHero(state, action) {
      const { heroKey } = action.payload;
      const currentSet = state.castles[state.currentCastle];

      if (!currentSet.myHeros) {
        currentSet.myHeros = {};
      }

      currentSet.myHeros[heroKey] = (currentSet.myHeros[heroKey] || 0) + 1;
      setDoc(doc(db, 'users', auth.currentUser.uid, 'castles', state.currentCastle), currentSet); // Adjusted Firestore path
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

      setDoc(doc(db, 'users', auth.currentUser.uid, 'castles', state.currentCastle), currentSet);
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

      setDoc(doc(db, 'users', auth.currentUser.uid, 'castles', state.currentCastle), currentSet);
    },
    setInitialData(state, action) {
      state.castles = action.payload.castles; 
      state.currentCastle = action.payload.firstCastle;
      state.sortedCastles = action.payload.sortedCastles;
    },
    setLoaded(state, action) {
      state.isLoaded = action.payload; 
    },
    setError(state, action) {
      state.error = action.payload; 
    }
  },
});

// Thunk to fetch initial data
export const fetchInitialData = () => async (dispatch) => {
  const user = auth.currentUser; // Get the authenticated user
  if (!user) {
    console.error("No user is logged in.");
    return;
  }

  const userUID = user.uid; // Fetch the UID of the logged-in user

  dispatch(myHerosSlice.actions.setLoaded(false)); // Set loading to false before fetching

  try {
    const castlesRef = collection(db, 'users', userUID, 'castles'); // Reference to user's castles
    const querySnapshot = await getDocs(castlesRef);
    const castlesData = {};
    let firstCastle = '';

    querySnapshot.forEach((doc) => {
      castlesData[doc.id] = doc.data();
      if (!firstCastle) {
        firstCastle = doc.id;
      }
    });

    // Check if the user has no castles
    if (Object.keys(castlesData).length === 0) {
      // Prompt for castle name
      const castleName = prompt("You don't have any castles. Please enter the name of your castle:");
      
      if (castleName) {
        // Create a new castle document with placeholders
        const newCastleRef = doc(castlesRef, castleName);
        await setDoc(newCastleRef, {
          myHeros: {}, // Placeholder for heroes
          favorites: {}, // Placeholder for favorites
          castleOrder: 1
        });
        
        // Update state with the new castle
        castlesData[castleName] = { myHeros: {}, favorites: {}, castleOrder: 1 };
        firstCastle = castleName;
      }
    }

    // Sort castles based on castleOrder
    const sortedCastles = Object.entries(castlesData)
      .sort(([, a], [, b]) => a.castleOrder - b.castleOrder)
      .map(([name]) => name); // Extract the sorted castle names

    dispatch(myHerosSlice.actions.setInitialData({ castles: castlesData, firstCastle, sortedCastles }));
  } catch (error) {
    console.error("Error fetching castles:", error);
  } finally {
    dispatch(myHerosSlice.actions.setLoaded(true)); // Set loading to true after fetching
  }
};


export const { addHero, removeHero, toggleFavorite, setCastle, addCastle, setInitialData, setLoaded } = myHerosSlice.actions;
export default myHerosSlice.reducer;
