// src/firebaseService.js
import { doc, setDoc } from "firebase/firestore";
import { db } from "./firebaseConfig";

// Function to save a new castle with empty structures for heroes and favorites
export const saveCastleToDatabase = async (userId, castleName, castleOrder) => {
  const castleData = {
    myHeros: {}, // Placeholder for hero data
    favorites: {}, // Placeholder for favorite heroes
    castleOrder: castleOrder
  };

  // Create a reference to the new castle document
  const castleRef = doc(db, `users/${userId}/castles`, castleName);

  // Save the new castle data
  await setDoc(castleRef, castleData);
};
