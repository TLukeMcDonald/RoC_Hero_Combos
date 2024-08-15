import { HEROES } from './heroConstants';
import { TROOPTYPE } from './typeConstants';

const combosData = [
  { heros: [HEROES.ROLAND, HEROES.LOUIS, HEROES.AVALANCHE], rank: '', freeRank: 1, troop: TROOPTYPE.C, hasPaid: 'N' },
  { heros: [HEROES.SAKURA, HEROES.WARDEN, HEROES.HENRYII], freeRank: 1, troop: TROOPTYPE.A, hasPaid: 'N' },
  { heros: [HEROES.HARALDIII, HEROES.GUSTAV, HEROES.HEALER], freeRank: 1, troop: TROOPTYPE.F, hasPaid: 'N' },
  { heros: [HEROES.HARALDIII, HEROES.WARHAMMER, HEROES.HEALER], freeRank: 1, troop: TROOPTYPE.M, hasPaid: 'N' },
  { heros: [HEROES.HENRYII, HEROES.ESELFRED, HEROES.SAKURA], freeRank: 1, troop: TROOPTYPE.P, hasPaid: 'N' },
  
  { heros: [HEROES.ROZEN, HEROES.FARAH, HEROES.SUNDIATA], rank: 7, freeRank: 2, troop: TROOPTYPE.C, hasPaid: 'N' },
  { heros: [HEROES.DEFENDER, HEROES.WARDEN, HEROES.HENRYV], freeRank: 2, troop: TROOPTYPE.A, hasPaid: 'N' },
  { heros: [HEROES.HARALDIII, HEROES.STEED, HEROES.HEALER], freeRank: 2, troop: TROOPTYPE.F, hasPaid: 'N' },
  { heros: [HEROES.HARALDIII, HEROES.STEED, HEROES.WARHAMMER], freeRank: 2, troop: TROOPTYPE.M, hasPaid: 'N' },
  { heros: [HEROES.HENRYII, HEROES.SAKURA, HEROES.HEALER], freeRank: 2, troop: TROOPTYPE.P, hasPaid: 'N' },
  
  { heros: [HEROES.ROLAND, HEROES.HELLFIRE, HEROES.AVALANCHE], freeRank: 3, troop: TROOPTYPE.C, hasPaid: 'N' },
  { heros: [HEROES.I_GUARDIAN, HEROES.WARDEN, HEROES.HENRYII], freeRank: 3, troop: TROOPTYPE.A, hasPaid: 'N' },
  { heros: [HEROES.HARALDIII, HEROES.HELLFIRE, HEROES.HEALER], freeRank: 3, troop: TROOPTYPE.F, hasPaid: 'N' },
  { heros: [HEROES.WARDEN, HEROES.HELLFIRE, HEROES.HENRYII], freeRank: 3, troop: TROOPTYPE.M, hasPaid: 'N' },
  { heros: [HEROES.ESELFRED, HEROES.ELK, HEROES.SAKURA], freeRank: 3, troop: TROOPTYPE.P, hasPaid: 'N' },
  
  { heros: [HEROES.ROLAND, HEROES.CID, HEROES.LOUIS], freeRank: 4, troop: TROOPTYPE.C, hasPaid: 'N' },
  { heros: [HEROES.HENRYV, HEROES.NICOLAS_FLAMEL, HEROES.HELLFIRE], freeRank: 4, troop: TROOPTYPE.A, hasPaid: 'N' },
  { heros: [HEROES.HARALDIII, HEROES.STEED, HEROES.HELLFIRE], freeRank: 4, troop: TROOPTYPE.F, hasPaid: 'N' },
  { heros: [HEROES.GUSTAV, HEROES.WARDEN, HEROES.HENRYII], freeRank: 4, troop: TROOPTYPE.M, hasPaid: 'N' },
  { heros: [HEROES.ARSLAN, HEROES.SCARLET_REAVER, HEROES.HEALER], freeRank: 4, troop: TROOPTYPE.P, hasPaid: 'N' },
  
  { heros: [HEROES.ROLAND, HEROES.CID, HEROES.AVALANCHE], freeRank: 5, troop: TROOPTYPE.C, hasPaid: 'N' },
  { heros: [HEROES.HENRYV, HEROES.NICOLAS_FLAMEL, HEROES.FREDERICK], freeRank: 5, troop: TROOPTYPE.A, hasPaid: 'N' },
  { heros: [HEROES.HARALDIII, HEROES.KING_CNUT, HEROES.HEALER], freeRank: 5, troop: TROOPTYPE.F, hasPaid: 'N' },
  { heros: [HEROES.ROZEN, HEROES.SAKURA, HEROES.HENRYII], freeRank: 5, troop: TROOPTYPE.M, hasPaid: 'N' },
  { heros: [HEROES.SAKURA, HEROES.ESELFRED, HEROES.FREDERICK], freeRank: 5, troop: TROOPTYPE.P, hasPaid: 'N' },
  
  { heros: [HEROES.ROZEN, HEROES.LOUIS, HEROES.SUNDIATA], freeRank: 6, troop: TROOPTYPE.C, hasPaid: 'N' },
  { heros: [HEROES.HENRYV, HEROES.NICOLAS_FLAMEL, HEROES.WITCHl], freeRank: 6, troop: TROOPTYPE.A, hasPaid: 'N' },
  { heros: [HEROES.HARALDIII, HEROES.SKANDA, HEROES.HEALER], freeRank: 6, troop: TROOPTYPE.F, hasPaid: 'N' },
  { heros: [HEROES.HUNK, HEROES.HELLFIRE, HEROES.HENRYI], freeRank: 6, troop: TROOPTYPE.M, hasPaid: 'N' },
  { heros: [HEROES.ESELFRED, HEROES.TARANTULA, HEROES.ELK], freeRank: 6, troop: TROOPTYPE.P, hasPaid: 'N' },
  
  { heros: [HEROES.ROLAND, HEROES.HELLFIRE, HEROES.LOUIS], freeRank: 7, troop: TROOPTYPE.C, hasPaid: 'N' },
  { heros: [HEROES.WITCH, HEROES.SAKURA, HEROES.FREDERICK], freeRank: 7, troop: TROOPTYPE.A, hasPaid: 'N' },
  { heros: [HEROES.HARALDIII, HEROES.SCARLET_REAVER, HEROES.HEALER], freeRank: 7, troop: TROOPTYPE.F, hasPaid: 'N' },
  { heros: [HEROES.HUNK, HEROES.WARDEN, HEROES.HENRYI], freeRank: 7, troop: TROOPTYPE.M, hasPaid: 'N' },
  { heros: [HEROES.FREDERICK, HEROES.SAKURA, HEROES.ELK], freeRank: 7, troop: TROOPTYPE.P, hasPaid: 'N' },
  
  { heros: [HEROES.HELLFIRE, HEROES.CID, HEROES.LOUIS], freeRank: 8, troop: TROOPTYPE.C, hasPaid: 'N' },
  { heros: [HEROES.I_GUARDIAN, HEROES.WARDEN, HEROES.ESELFRED], freeRank: 8, troop: TROOPTYPE.A, hasPaid: 'N' },
  { heros: [HEROES.HARALDIII, HEROES.CLOVIS, HEROES.HEALER], freeRank: 8, troop: TROOPTYPE.F, hasPaid: 'N' },
  { heros: [HEROES.HUNK, HEROES.HENRYII, HEROES.SAKURA], freeRank: 8, troop: TROOPTYPE.M, hasPaid: 'N' },
  { heros: [HEROES.ARSLAN, HEROES.ESELFRED, HEROES.HEALER], freeRank: 8, troop: TROOPTYPE.P, hasPaid: 'N' },
  
  { heros: [HEROES.ROZEN, HEROES.FARAH, HEROES.LOUIS], freeRank: 9, troop: TROOPTYPE.C, hasPaid: 'N' },
  { heros: [HEROES.HENRYV, HEROES.FREDERICK, HEROES.WITCHl], freeRank: 9, troop: TROOPTYPE.A, hasPaid: 'N' },
  { heros: [HEROES.HARALDIII, HEROES.DACH_TENGRI, HEROES.HEALER], freeRank: 9, troop: TROOPTYPE.F, hasPaid: 'N' },
  { heros: [HEROES.HUNK, HEROES.ESELFRED, HEROES.SAKURA], freeRank: 9, troop: TROOPTYPE.M, hasPaid: 'N' },
  { heros: [HEROES.INQUISITOR, HEROES.FREDERICK, HEROES.SAKURA], freeRank: 9, troop: TROOPTYPE.P, hasPaid: 'N' },
  
  { heros: [HEROES.ROLAND, HEROES.WARHAMMER, HEROES.AVALANCHE], freeRank: 10, troop: TROOPTYPE.C, hasPaid: 'N' },
  { heros: [HEROES.CHARLES, HEROES.POISON_MASTER, HEROES.BELISARIUS], freeRank: 10, troop: TROOPTYPE.A, hasPaid: 'N' },
  { heros: [HEROES.ARSLAN, HEROES.SCARLET_REAVER, HEROES.HEALER], freeRank: 10, troop: TROOPTYPE.F, hasPaid: 'N' },
  { heros: [HEROES.HUNK, HEROES.WARDEN, HEROES.RAINFOREST], freeRank: 10, troop: TROOPTYPE.M, hasPaid: 'N' },
  { heros: [HEROES.SAKURA, HEROES.INQUISITOR, HEROES.ESELFRED], freeRank: 10, troop: TROOPTYPE.P, hasPaid: 'N' },
  


];

export default combosData;