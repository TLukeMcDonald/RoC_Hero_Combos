import React from 'react';
import HerosList from './components/HerosList';
import FilteredCombos from './components/FilteredCombos';
import { filterCompletedCombos, filterPartialCombos } from './utils/helperFunctions';
import combosData from './data/combosData.json';
import myHeros from './data/myHeros.js';
import herosData from './data/herosData.js';
import './assets/css/App.css';

const App = () => {
  // Filtered completed and partial combos
  const completedCombos = filterCompletedCombos(combosData, myHeros, herosData);
  const partialCombos = filterPartialCombos(combosData, myHeros);

  return (
    <div className="App">
      <HerosList />
      <div className="filtered-combos-container">
        <h1 className="completed-combos-title">Completed Combos</h1>
        <FilteredCombos combos={completedCombos} />
        <h1 className="completed-combos-title">Partial Combos</h1>
        <FilteredCombos combos={partialCombos} />
      </div>
    </div>
  );
};

export default App;