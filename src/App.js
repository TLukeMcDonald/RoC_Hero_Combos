import React from 'react';
import { useSelector } from 'react-redux';
import HerosList from './components/HerosList';
import FilteredCombos from './components/FilteredCombos';
import { filterCompletedCombos, filterPartialCombos } from './utils/helperFunctions';
import combosData from './data/combosData'; // Import combosData
import './assets/css/App.css';

const App = () => {
  const myHeros = useSelector((state) => state.myHeros);

  const completedCombos = filterCompletedCombos(combosData, myHeros);
  const partialCombos = filterPartialCombos(combosData, myHeros);

  return (
    <div className="App">
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