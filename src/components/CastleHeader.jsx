import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCastle } from '../redux/myHerosSlice'; // Import the action

const CastleHeader = () => {
  const dispatch = useDispatch();
  const castles = useSelector((state) => Object.keys(state.myHeros.castles)); // Get castle names from state
  const currentCastle = useSelector((state) => state.myHeros.currentCastle); // Get current castle

  const handleCastleChange = (castleName) => {
    dispatch(setCastle(castleName));
  };

  return (
    <div className="castle-header">
      {castles.map((castleName) => (
        <button
          key={castleName}
          className={`castle-button ${currentCastle === castleName ? 'active' : ''}`}
          onClick={() => handleCastleChange(castleName)}
        >
          {castleName}
        </button>
      ))}
    </div>
  );
};

export default CastleHeader;
