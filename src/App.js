import React, { useEffect, useMemo, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import HerosList from './components/HerosList';
import FilteredCombos from './components/FilteredCombos';
import { filterCompletedCombos, filterPartialCombos } from './utils/helperFunctions';
import { fetchInitialData } from './redux/myHerosSlice';
import CastleHeader from './components/CastleHeader';
import combosData from './data/combosData'; 
import './assets/css/App.css';
import { auth, googleProvider } from './firebaseConfig'; 
import { signInWithPopup, signOut } from 'firebase/auth';

const App = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState(null);

  // Handle Google sign-in
  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      setUser(result.user);
    } catch (error) {
      console.error("Error during sign-in:", error);
    }
  };

  // Handle sign-out
  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error("Error during sign-out:", error);
    }
  };

  // Fetch initial hero data only when user is logged in
  useEffect(() => {
    if (user) {
      dispatch(fetchInitialData());
    }
  }, [dispatch, user]);

  const isLoaded = useSelector((state) => state.myHeros.isLoaded);
  const error = useSelector((state) => state.myHeros.error);

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

  // If loading or user isn't authenticated, show login or loading state
  if (!user) {
    return (
      <div className="login-screen">
        <h1>Please Sign In</h1>
        <button onClick={handleLogin}>Sign in with Google</button>
      </div>
    );
  }

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <button onClick={handleLogout}>Sign Out</button>
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
