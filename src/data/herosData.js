import { HEROES } from './heroConstants';
import { TROOPTYPE } from './typeConstants';

const herosData = {
    [HEROES.ROZEN]: {"name": HEROES.ROZEN, "type":TROOPTYPE.C, "copiesNeed": 4},
    [HEROES.IMMORTAL]: {"name": HEROES.IMMORTAL, "type":TROOPTYPE.C, "copiesNeed": 4},
    [HEROES.FARAH]: {"name": HEROES.FARAH, "type":TROOPTYPE.C, "copiesNeed": 4},
    [HEROES.AVALANCHE]:{"name": HEROES.AVALANCHE, "type":TROOPTYPE.C, "copiesNeed": 4},
    [HEROES.SUNDIATA]: {"name": HEROES.SUNDIATA, "type":TROOPTYPE.C, "copiesNeed": 4}

};

export default herosData;