import herosData from '../data/herosData'; 

// Filtering functions
export const filterCompletedCombos = (combosData, myHeros) => {
  return combosData.filter(combo =>
    combo.heros.every(heroName => {
      const hero = myHeros[heroName];
      return hero && hero >= herosData[heroName].copiesNeed;
    })
  );
};

export const filterPartialCombos = (combosData, myHeros) => {
  return combosData.filter(combo =>
    combo.heros.some(heroName => myHeros[heroName])
  );
};