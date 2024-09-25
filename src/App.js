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
  }, [dispatch]);

  const isLoaded = useSelector((state) => state.myHeros.isLoaded);
  const error = useSelector((state) => state.myHeros.error); // Get the error state

  const myHeros = useSelector((state) => {
    const currentCastle = state.myHeros.currentCastle;
    return state.myHeros.castles[currentCastle]?.myHeros || {};
  });

  const favorites = useSelector((state) => {
    const currentCastle = state.myHeros.currentCastle;
    return state.myHeros.castles[currentCastle]?.favorites || {};
  });

  const completedCombos = useMemo(() => filterCompletedCombos(combosData, myHeros, favorites), [myHeros, favorites]);
  const partialCombos = useMemo(() => filterPartialCombos(combosData, myHeros), [myHeros]);

  // If there's an error, display it
  if (error) {
    return <div>Error: {error}</div>;
  }

  // If loading, show a loading state
  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <CastleHeader />
      <HerosList />
      <div className="filtered-combos-container">
        <div className="filtered-combos-title">Completed or Favorite Combos</div>
        <FilteredCombos combos={completedCombos} />
        <div className="filtered-combos-title">Partial Combos</div>
        <FilteredCombos combos={partialCombos} />
      </div>
    </div>
  );
};

export default App;
