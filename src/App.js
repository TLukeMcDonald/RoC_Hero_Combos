import React, { useEffect, useMemo, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import HerosList from './components/HerosList';
import CombosDisplay from './components/CombosDisplay';
import ComboFilters from './components/ComboFilters'; 
import { filterCompletedCombos, filterPartialCombos } from './utils/helperFunctions';
import { fetchInitialData } from './redux/myHerosSlice';
import CastleHeader from './components/CastleHeader';
import combosData from './data/combosData';
import './assets/css/App.scss';
import { auth, googleProvider } from './firebaseConfig';
import { signInWithPopup, signOut } from 'firebase/auth';


const App = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState(null);
  const [authError, setAuthError] = useState(null);

  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      setUser(result.user);
    } catch (error) {
      console.error('Error during sign-in:', error);
      setAuthError('Login failed. Please try again.');
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error('Error during sign-out:', error);
    }
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
        dispatch(fetchInitialData());
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, [dispatch]);

  const isLoaded = useSelector((state) => state.myHeros.isLoaded);
  const error = useSelector((state) => state.myHeros.error);
  const filters = useSelector((state) => state.comboFilters);


  const myHeros = useSelector((state) => {
    const currentCastle = state.myHeros.currentCastle;
    return state.myHeros.castles[currentCastle]?.myHeros || {};
  });

  const favorites = useSelector((state) => {
    const currentCastle = state.myHeros.currentCastle;
    return state.myHeros.castles[currentCastle]?.favorites || {};
  });


  const completedCombos = useMemo(() => filterCompletedCombos(combosData, myHeros, favorites, filters), [myHeros, favorites, filters]);
  const partialCombos = useMemo(() => filterPartialCombos(combosData, myHeros,favorites, filters), [myHeros,favorites, filters]);

  // If there's an error, display it
  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!user) {
    return (
      <div className="login-screen">
        <h1>Please Sign In</h1>
        {authError && <p className="error-message">{authError}</p>}
        <button onClick={handleLogin} className="login-button">Sign in with Google</button>
      </div>
    );
  }

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <CastleHeader handleLogout={handleLogout}/>
      <ComboFilters /> 
      <HerosList />
      <CombosDisplay completedCombos={completedCombos} partialCombos={partialCombos} />
    </div>
  );
};

export default App;
