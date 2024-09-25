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
