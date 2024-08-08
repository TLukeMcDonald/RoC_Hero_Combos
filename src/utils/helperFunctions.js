import herosData from '../data/herosData'; 

// Filtering functions
export const filterCompletedCombos = (combosData, myHeros) => {
  return combosData.filter(combo =>
    combo.heros.every(heroKey => {
      const hero = myHeros[heroKey];
      return hero && hero >= herosData[heroKey].copiesNeed;
    })
  );
};

export const filterPartialCombos = (combosData, myHeros) => {
  return combosData.filter(combo =>
    combo.heros.some(heroKey => myHeros[heroKey])
  );
};