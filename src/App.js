import React, { useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import HerosList from './components/HerosList';
import FilteredCombos from './components/FilteredCombos';
import { filterCompletedCombos, filterPartialCombos } from './utils/helperFunctions';
import { fetchInitialData } from './redux/myHerosSlice'; // Import the thunk for fetching data
import CastleHeader from './components/CastleHeader';
import combosData from './data/combosData'; 
import './assets/css/App.css';

const App = () => {
  const dispatch = useDispatch();

  // Fetch initial hero data when the component mounts
  useEffect(() => {
    dispatch(fetchInitialData());
  }, [dispatch]); // Empty dependency array ensures this runs once on mount

  const myHeros = useSelector((state) => {
    const currentCastle = state.myHeros.currentCastle;
    return state.myHeros.castles[currentCastle]?.myHeros || {};
  });

  const isLoading = Object.keys(myHeros).length === 0;

  // Use useMemo to optimize the filtering of combos
  const completedCombos = useMemo(() => filterCompletedCombos(combosData, myHeros), [myHeros]);
  const partialCombos = useMemo(() => filterPartialCombos(combosData, myHeros), [myHeros]);

  // If loading, show a loading state
  if (isLoading) {
    return <div>Loading...</div>; // Show a loading state or a message if myHeros is not available
  }

  return (
    <div className="App">
      <CastleHeader />
      <HerosList />
      <div className="filtered-combos-container">
        <div className="filtered-combos-title">Completed Combos</div>
        <FilteredCombos combos={completedCombos} />
        <div className="filtered-combos-title">Partial Combos</div>
        <FilteredCombos combos={partialCombos} />
      </div>
    </div>
  );
};

export default App;

