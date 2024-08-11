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


// Other helpers
export const getTextColorClass = (copiesHave, copiesNeeded) => {
  if (copiesNeeded === 0) return 'zero'; // Handle division by zero

  const percentage = copiesHave / copiesNeeded;

  return percentage < 0.25 ? 'zero' :
    percentage < 0.50 ? 'quarter' :
    percentage < 0.75 ? 'half' :
    percentage < 1.00 ? 'threeQuarters' :
    'full';
};