// Filtering functions
export const filterCompletedCombos = (combosData, myHeros, herosData) => {
  return combosData.filter(combo =>
    combo.heros.every(heroName => {
      const hero = myHeros[heroName]; // Access hero data directly using heroName as key
      return hero && hero >= herosData[heroName].copiesNeed;
    })
  );
};

export const filterPartialCombos = (combosData, myHeros) => {
  return combosData.filter(combo =>
    combo.heros.some(heroName => 
      myHeros[heroName] // Access hero data directly using heroName as key
    )
  );
};