import herosData from '../data/herosData';
import { pipe } from 'ramda';

// Filtering functions
export const filterCompletedCombos = (combosData, myHeros, favorites, filters) => {
  const {troopTypes, paid} = filters;
  return pipe(
    (combos) => filterFavOrOwned(combos, myHeros, favorites),
    (combos) => applyTroopFilters(combos, troopTypes),
    (combos) => filterByPaidStatus(combos, paid)
  )(combosData);
};

export const filterPartialCombos = (combosData, myHeros, favorites, filters) => {
  const {troopTypes, paid} = filters;
  return pipe(
    (combos) => filterPartials(combos, myHeros, favorites),
    (combos) => applyTroopFilters(combos, troopTypes),
    (combos) => filterByPaidStatus(combos, paid)
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

const filterPartials = (combosData, myHeros, favorites) => {
  return combosData.filter(combo => 
    combo.heros.some(heroKey =>
      favorites[heroKey] || myHeros[heroKey])

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

const applyTroopFilters = (combos, troopTypes) => {
  return combos.filter(combo => {
    const troop = combo.troop; // Assuming troop holds the type directly
    const matchesFilter = troop ? troopTypes[troop] : false;

    // Check if any troop filters are active
    const anyFilterActive = Object.values(troopTypes).some(v => v);
    
    // If no filters are active, include all combos; if any filters are active, only include those that match
    return !anyFilterActive || matchesFilter;
  });
};

const filterByPaidStatus = (combosData, paidFilter) => {
  return combosData.filter(combo => {

    const anyFilterActive = Object.values(paidFilter).some(v => v);

    const matchesFilter = combo.hasPaid === 'Y' ? paidFilter['paid'] : paidFilter['notPaid'];

    return !anyFilterActive || matchesFilter;
  })
};