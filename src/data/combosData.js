import { HEROES } from './heroConstants';
import { TROOPTYPE } from './typeConstants';

const combosData = [
  { heros: [HEROES.ROLAND, HEROES.LOUIS, HEROES.AVALANCHE], rank: '', freeRank: 1, troop: TROOPTYPE.C, hasPaid: 'N' },
  { heros: [HEROES.SAKURA, HEROES.WARDEN, HEROES.HENRYII], freeRank: 1, troop: TROOPTYPE.A, hasPaid: 'N' },
  { heros: [HEROES.HERALDIII, HEROES.GUSTAV, HEROES.HEALER], freeRank: 1, troop: TROOPTYPE.F, hasPaid: 'N' },
  { heros: [HEROES.HERALDIII, HEROES.WARHAMMER, HEROES.HEALER], freeRank: 1, troop: TROOPTYPE.M, hasPaid: 'N' },
  { heros: [HEROES.HENRYII, HEROES.ESELFRED, HEROES.SAKURA], freeRank: 1, troop: TROOPTYPE.P, hasPaid: 'N' },
  
  { heros: [HEROES.ROZEN, HEROES.FARAH, HEROES.SUNDIATA], rank: 7, freeRank: 2, troop: TROOPTYPE.C, hasPaid: 'N' },
  { heros: [HEROES.Defender, HEROES.WARDEN, HEROES.HENRYV], freeRank: 2, troop: TROOPTYPE.A, hasPaid: 'N' },
  { heros: [HEROES.HERALDIII, HEROES.STEED, HEROES.HEALER], freeRank: 2, troop: TROOPTYPE.F, hasPaid: 'N' },
  { heros: [HEROES.HERALDIII, HEROES.STEED, HEROES.Warhammer], freeRank: 2, troop: TROOPTYPE.M, hasPaid: 'N' },
  { heros: [HEROES.HENRYII, HEROES.SAKURA, HEROES.HEALER], freeRank: 2, troop: TROOPTYPE.P, hasPaid: 'N' },
  
  { heros: [HEROES.Roland, HEROES.HellFire, HEROES.Avalanche], freeRank: 3, troop: TROOPTYPE.C, hasPaid: 'N' },
  { heros: [HEROES.I_GUARDIAN, HEROES.WARDEN, HEROES.HENRYII], freeRank: 3, troop: TROOPTYPE.A, hasPaid: 'N' },
  { heros: [HEROES.HERALDIII, HEROES.Hellfire, HEROES.HEALER], freeRank: 3, troop: TROOPTYPE.F, hasPaid: 'N' },
  { heros: [HEROES.WARDEN, HEROES.Hellfire, HEROES.HENRYII], freeRank: 3, troop: TROOPTYPE.M, hasPaid: 'N' },
  { heros: [HEROES.ESELFRED, HEROES.ELK, HEROES.SAKURA], freeRank: 3, troop: TROOPTYPE.P, hasPaid: 'N' },
  
  { heros: [HEROES.Roland, HEROES.CID, HEROES.LOUIS], freeRank: 4, troop: TROOPTYPE.C, hasPaid: 'N' },
  { heros: [HEROES.HenryV, HEROES.NICOLAS_FLAMEL, HEROES.HellFire], freeRank: 4, troop: TROOPTYPE.A, hasPaid: 'N' },
  { heros: [HEROES.HERALDIII, HEROES.STEED, HEROES.HellFire], freeRank: 4, troop: TROOPTYPE.F, hasPaid: 'N' },
  { heros: [HEROES.GUSTAV, HEROES.WARDEN, HEROES.HENRYII], freeRank: 4, troop: TROOPTYPE.M, hasPaid: 'N' },
  { heros: [HEROES.Arslan, HEROES.ScarletReaver, HEROES.HEALER], freeRank: 4, troop: TROOPTYPE.P, hasPaid: 'N' },
  
  { heros: [HEROES.Roland, HEROES.Cid, HEROES.Avalanche], freeRank: 5, troop: TROOPTYPE.C, hasPaid: 'N' },
  { heros: [HEROES.HenryV, HEROES.NICOLAS_FLAMEL, HEROES.FREDERICK], freeRank: 5, troop: TROOPTYPE.A, hasPaid: 'N' },
  { heros: [HEROES.HERALDIII, HEROES.KING_CNUT, HEROES.HEALER], freeRank: 5, troop: TROOPTYPE.F, hasPaid: 'N' },
  { heros: [HEROES.ROZEN, HEROES.SAKURA, HEROES.HENRYII], freeRank: 5, troop: TROOPTYPE.M, hasPaid: 'N' },
  { heros: [HEROES.SAKURA, HEROES.ESELFRED, HEROES.FREDERICK], freeRank: 5, troop: TROOPTYPE.P, hasPaid: 'N' },
  
  { heros: [HEROES.ROZEN, HEROES.LOUIS, HEROES.SUNDIATA], freeRank: 6, troop: TROOPTYPE.C, hasPaid: 'N' },
  { heros: [HEROES.HenryV, HEROES.NICOLAS_FLAMEL, HEROES.WITCHl], freeRank: 6, troop: TROOPTYPE.A, hasPaid: 'N' },
  { heros: [HEROES.HERALDIII, HEROES.Skanda, HEROES.HEALER], freeRank: 6, troop: TROOPTYPE.F, hasPaid: 'N' },
  { heros: [HEROES.Hunk, HEROES.HellFire, HEROES.HENRYI], freeRank: 6, troop: TROOPTYPE.M, hasPaid: 'N' },
  { heros: [HEROES.ESELFRED, HEROES.Tarantula, HEROES.ELK], freeRank: 6, troop: TROOPTYPE.P, hasPaid: 'N' },
  
  { heros: [HEROES.Roland, HEROES.HellFire, HEROES.LOUIS], freeRank: 7, troop: TROOPTYPE.C, hasPaid: 'N' },
  { heros: [HEROES.WITCH, HEROES.SAKURA, HEROES.FREDERICK], freeRank: 7, troop: TROOPTYPE.A, hasPaid: 'N' },
  { heros: [HEROES.HERALDIII, HEROES.ScarletReaver, HEROES.HEALER], freeRank: 7, troop: TROOPTYPE.F, hasPaid: 'N' },
  { heros: [HEROES.Hunk, HEROES.WARDEN, HEROES.HENRYI], freeRank: 7, troop: TROOPTYPE.M, hasPaid: 'N' },
  { heros: [HEROES.Frederick, HEROES.SAKURA, HEROES.ELK], freeRank: 7, troop: TROOPTYPE.P, hasPaid: 'N' },
  
  { heros: [HEROES.HellFire, HEROES.CID, HEROES.LOUIS], freeRank: 8, troop: TROOPTYPE.C, hasPaid: 'N' },
  { heros: [HEROES.I_GUARDIAN, HEROES.WARDEN, HEROES.ESELFRED], freeRank: 8, troop: TROOPTYPE.A, hasPaid: 'N' },
  { heros: [HEROES.HERALDIII, HEROES.CLOVIS, HEROES.HEALER], freeRank: 8, troop: TROOPTYPE.F, hasPaid: 'N' },
  { heros: [HEROES.Hunk, HEROES.HENRYII, HEROES.SAKURA], freeRank: 8, troop: TROOPTYPE.M, hasPaid: 'N' },
  { heros: [HEROES.Arslan, HEROES.ESELFRED, HEROES.HEALER], freeRank: 8, troop: TROOPTYPE.P, hasPaid: 'N' },
  
  { heros: [HEROES.ROZEN, HEROES.FARAH, HEROES.LOUIS], freeRank: 9, troop: TROOPTYPE.C, hasPaid: 'N' },
  { heros: [HEROES.HenryV, HEROES.FREDERICK, HEROES.WITCHl], freeRank: 9, troop: TROOPTYPE.A, hasPaid: 'N' },
  { heros: [HEROES.HERALDIII, HEROES.DACH_TENGRI, HEROES.HEALER], freeRank: 9, troop: TROOPTYPE.F, hasPaid: 'N' },
  { heros: [HEROES.Hunk, HEROES.ESELFRED, HEROES.SAKURA], freeRank: 9, troop: TROOPTYPE.M, hasPaid: 'N' },
  { heros: [HEROES.Inquisitor, HEROES.FREDERICK, HEROES.SAKURA], freeRank: 9, troop: TROOPTYPE.P, hasPaid: 'N' },
  
  { heros: [HEROES.Roland, HEROES.Warhammer, HEROES.Avalanche], freeRank: 10, troop: TROOPTYPE.C, hasPaid: 'N' },
  { heros: [HEROES.CHARLES, HEROES.PoisonMaster, HEROES.Bellisarius], freeRank: 10, troop: TROOPTYPE.A, hasPaid: 'N' },
  { heros: [HEROES.Arslan, HEROES.ScarletReaver, HEROES.HEALER], freeRank: 10, troop: TROOPTYPE.F, hasPaid: 'N' },
  { heros: [HEROES.Hunk, HEROES.WARDEN, HEROES.Rainforest], freeRank: 10, troop: TROOPTYPE.M, hasPaid: 'N' },
  { heros: [HEROES.SAKURA, HEROES.Inquisitor, HEROES.ESELFRED], freeRank: 10, troop: TROOPTYPE.P, hasPaid: 'N' },
  


];

export default combosData;