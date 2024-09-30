import herosData from '../data/herosData';
import { pipe } from 'ramda';

// Filtering functions
export const filterCompletedCombos = (combosData, myHeros, favorites, troopFilters) => {
  return pipe(
    (combos) => filterFavOrOwned(combos, myHeros, favorites),
    (combos) => applyTroopFilters(combos, troopFilters)
  )(combosData);
};

export const filterPartialCombos = (combosData, myHeros, troopFilters) => {
  return pipe(
    (combos) => filterPartials(combos, myHeros),
    (combos) => applyTroopFilters(combos, troopFilters)
  )(combosData);
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

const filterPartials = (combosData, myHeros) => {
  return combosData.filter(combo =>
    combo.heros.some(heroKey => myHeros[heroKey])
  );
};

const filterFavOrOwned = (combosData, myHeros, favorites) => {
  return combosData.filter(combo =>
    combo.heros.every(heroKey => {
      const hero = myHeros[heroKey];
      const isFavorite = favorites[heroKey];
      
      // Consider the hero completed if they are either in favorites or have enough copies
      return isFavorite || (hero && hero.copiesHave >= herosData[heroKey].copiesNeed);
    })
  );
};

const applyTroopFilters = (combos, troopFilters) => {
  return combos.filter(combo => {
    const troopType = combo.troop; // Assuming troop holds the type directly
    const matchesFilter = troopType ? troopFilters.troopTypes[troopType] : false;

    // Check if any troop filters are active
    const anyFilterActive = Object.values(troopFilters.troopTypes).some(v => v);
    
    // If no filters are active, include all combos; if any filters are active, only include those that match
    return !anyFilterActive || matchesFilter;
  });
};
