import './App.css';
import Heros from './components/HerosList';
import CompletedCombos from './components/CompletedCombos';
import PartialCombos from './components/PartialCombos';
import React from 'react';

const App = () => {
  return (
    <div className="App">
      <Heros />
      <CompletedCombos />
      <PartialCombos />
    </div>
  );
};


export default App;
