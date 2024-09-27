import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCastle, addCastle } from '../redux/myHerosSlice'; // Import the actions
import { saveCastleToDatabase } from '../firebaseService'; // Import the function to save to the database
import { auth } from '../firebaseConfig'; // Import the Firebase auth instance
import './../assets/css/CastleHeader.css'

const CastleHeader = () => {
  const dispatch = useDispatch();
  const sortedCastles = useSelector((state) => state.myHeros.sortedCastles); // Get castle names from state
  const currentCastle = useSelector((state) => state.myHeros.currentCastle); // Get current castle

  const handleCastleChange = (castleName) => {
    dispatch(setCastle(castleName));
  };

  const handleAddCastle = async () => {
    const castleName = prompt("Enter the name of your new castle:");
    if (castleName) {
      const userId = auth.currentUser ? auth.currentUser.uid : null; // Get the UID of the current user

      if (userId) { // Ensure user is logged in
        // Dispatch action to add the new castle
        dispatch(addCastle(castleName));

        // Save the new castle to the database
        try {
          await saveCastleToDatabase(userId, castleName, sortedCastles.length+1); // Pass the userId and castleName
        } catch (error) {
          console.error("Error saving castle to the database:", error);
        }
      } else {
        alert("You must be logged in to add a new castle.");
      }
    }
  };

  return (
    <div className="castle-header">
      {sortedCastles.map((castleName) => (
        <button
          key={castleName}
          className={`castle-button ${currentCastle === castleName ? 'active' : ''}`}
          onClick={() => handleCastleChange(castleName)}
        >
          {castleName}
        </button>
      ))}
      <button className="add-castle-button" onClick={handleAddCastle}>
        +
      </button>
    </div>
  );
};

export default CastleHeader;
