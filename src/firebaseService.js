// src/firebaseService.js

import { collection, getDocs, doc, setDoc } from "firebase/firestore";
import { db } from "./firebaseConfig";

// Firestore collection reference
const heroCollection = collection(db, 'myHeros');

// Get all heroes from Firestore
export const fetchHeroes = async () => {
  const querySnapshot = await getDocs(heroCollection);
  const heroes = {};
  querySnapshot.forEach((doc) => {
    heroes[doc.id] = doc.data();
  });
  return heroes;
};

// Save or update a hero in Firestore
export const saveHero = async (castle, heroKey, copies) => {
  const heroRef = doc(db, 'myHeros', castle);
  await setDoc(heroRef, {
    [heroKey]: copies
  }, { merge: true });
};

// Function to save a new castle with empty structures for heroes and favorites
export const saveCastleToDatabase = async (userId, castleName) => {
  const castleData = {
    myHeros: {}, // Placeholder for hero data
    favorites: {} // Placeholder for favorite heroes
  };

  // Create a reference to the new castle document
  const castleRef = doc(db, `users/${userId}/castles`, castleName);

  // Save the new castle data
  await setDoc(castleRef, castleData);
};
