import { HEROES } from './heroConstants';
import { TROOPTYPE } from './typeConstants';

const herosData = {
    [HEROES.ALEXANDER]: {"name": "Alexander", "type": TROOPTYPE.F, "copiesNeed": 34, "paid": "Y", pictureLink: "ALEXANDER.jpg" },
    [HEROES.ALFAITH]: {"name": "AlFaith", "type": TROOPTYPE.A, "copiesNeed": 4, "paid": "N", pictureLink: "ALFAITH.jpg" },
    [HEROES.ALFRED]: {"name": "Alfred", "type": TROOPTYPE.C, "copiesNeed":34, "paid": "Y", pictureLink: "ALFRED.jpg" },
    [HEROES.ARMY_BREAKER]: {"name": "Army Breaker", "type": TROOPTYPE.C, "copiesNeed":4, "paid": "N", pictureLink: "ArmyBreaker.jpg" },
    [HEROES.ARSLAN]: {"name": "Arslan", "type": TROOPTYPE.C, "copiesNeed":4, "paid": "N", pictureLink: "ARSLAN.jpg" },
    [HEROES.ARTHUR]: {"name": "Arthur", "type": TROOPTYPE.C, "copiesNeed":34, "paid": "Y", pictureLink: "ARTHUR.jpg" },
    [HEROES.ASHEN]: {"name": "Ashen", "type": TROOPTYPE.C, "copiesNeed":4, "paid": "N", pictureLink: "ASHEN.jpg" },
    [HEROES.ASHOKA]: {"name": "Ashoka", "type": TROOPTYPE.C, "copiesNeed":4, "paid": "N", pictureLink: "ASHOKA.jpg" },
    [HEROES.AVALANCHE]: {"name": "Avalanche", "type": TROOPTYPE.C, "copiesNeed":4, "paid": "N", pictureLink: "AVALANCHE.jpg" },
    [HEROES.BEASTQUEEN]: {"name": "Beastqueen", "type": TROOPTYPE.C, "copiesNeed":4, "paid": "N", pictureLink: "BEASTQUEEN.jpg" },
    [HEROES.BELISARIUS]: {"name": "Belisarius", "type": TROOPTYPE.C, "copiesNeed":4, "paid": "N", pictureLink: "BELISARIUS.jpg" },
    [HEROES.BJORN]: {"name": "Bjorn", "type": TROOPTYPE.C, "copiesNeed":4, "paid": "N", pictureLink: "BJORN.jpg" },
    [HEROES.BLACKPRINCE]: {"name": "Blackprince", "type": TROOPTYPE.C, "copiesNeed":4, "paid": "N", pictureLink: "BLACKPRINCE.jpg" },
    [HEROES.BONELESS]: {"name": "Boneless", "type": TROOPTYPE.C, "copiesNeed":4, "paid": "N", pictureLink: "BONELESS.jpg" },
    [HEROES.BOUDICA]: {"name": "Boudica", "type": TROOPTYPE.C, "copiesNeed":34, "paid": "Y", pictureLink: "BOUDICA.jpg" },
    [HEROES.BRAVE]: {"name": "Brave", "type": TROOPTYPE.C, "copiesNeed":4, "paid": "N", pictureLink: "BRAVE.jpg" },
    [HEROES.CAESAR]: {"name": "Caesar", "type": TROOPTYPE.C, "copiesNeed":34, "paid": "Y", pictureLink: "CAESAR.jpg" },
    [HEROES.CAOCAO]: {"name": "Caocao", "type": TROOPTYPE.C, "copiesNeed":4, "paid": "N", pictureLink: "CAOCAO.jpg" },
    [HEROES.CHARLES]: {"name": "Charles", "type": TROOPTYPE.C, "copiesNeed":4, "paid": "N", pictureLink: "CHARLES.jpg" },
    [HEROES.CHENLIU]: {"name": "Chenliu", "type": TROOPTYPE.C, "copiesNeed":4, "paid": "N", pictureLink: "CHENLIU.jpg" },
    [HEROES.CICERO]: {"name": "Cicero", "type": TROOPTYPE.C, "copiesNeed":4, "paid": "N", pictureLink: "CICERO.jpg" },
    [HEROES.CID]: {"name": "El Cid", "type": TROOPTYPE.C, "copiesNeed":4, "paid": "N", pictureLink: "CID.jpg" },
    [HEROES.CLEO]: {"name": "Cleo", "type": TROOPTYPE.C, "copiesNeed":34, "paid": "Y", pictureLink: "CLEO.jpg" },
    [HEROES.CLOVIS]: {"name": "Clovis", "type": TROOPTYPE.C, "copiesNeed":4, "paid": "N", pictureLink: "CLOVIS.jpg" },
    [HEROES.CONSTANTINE]: {"name": "Constantine", "type": TROOPTYPE.C, "copiesNeed":4, "paid": "N", pictureLink: "CONSTANTINE.jpg" },
    [HEROES.DACH_TENGRI]: {"name": "Dach Tengri", "type": TROOPTYPE.C, "copiesNeed":4, "paid": "N", pictureLink: "DACHTENGRI.jpg" },
    [HEROES.DARIUS]: {"name": "Darius", "type": TROOPTYPE.C, "copiesNeed":4, "paid": "N", pictureLink: "DARIUS.jpg" },
    [HEROES.DEFENDER]: {"name": "Defender", "type": TROOPTYPE.C, "copiesNeed":4, "paid": "N", pictureLink: "DEFENDER.jpg" },
    [HEROES.DEMONSPEAR]: {"name": "Demonspear", "type": TROOPTYPE.C, "copiesNeed":4, "paid": "N", pictureLink: "DEMONSPEAR.jpg" },
    [HEROES.DESERTSTORM]: {"name": "Desertstorm", "type": TROOPTYPE.C, "copiesNeed":4, "paid": "N", pictureLink: "DESERTSTORM.jpg" },
    [HEROES.DIVINE]: {"name": "Divine", "type": TROOPTYPE.C, "copiesNeed":4, "paid": "N", pictureLink: "DIVINE.jpg" },
    [HEROES.EDWARD]: {"name": "Edward", "type": TROOPTYPE.C, "copiesNeed":4, "paid": "N", pictureLink: "EDWARD.jpg" },
    [HEROES.EIDOLON]: {"name": "Eidolon", "type": TROOPTYPE.C, "copiesNeed":4, "paid": "N", pictureLink: "EIDOLON.jpg" },
    [HEROES.ELK]: {"name": "Elk", "type": TROOPTYPE.C, "copiesNeed":4, "paid": "N", pictureLink: "ELK.jpg" },
    [HEROES.ESELFRED]: {"name": "Eselfred", "type": TROOPTYPE.C, "copiesNeed":4, "paid": "N", pictureLink: "ESELFRED.jpg" },
    [HEROES.FARAH]: {"name": "Farah", "type": TROOPTYPE.C, "copiesNeed":4, "paid": "N", pictureLink: "FARAH.jpg" },
    [HEROES.FORTUNETELLER]: {"name": "Fortuneteller", "type": TROOPTYPE.C, "copiesNeed":4, "paid": "N", pictureLink: "FORTUNETELLER.jpg" },
    [HEROES.FREDERICK]: {"name": "Frederick", "type": TROOPTYPE.C, "copiesNeed":4, "paid": "N", pictureLink: "FREDERICK.jpg" },
    [HEROES.GENGHIS]: {"name": "Genghis", "type": TROOPTYPE.C, "copiesNeed":4, "paid": "N", pictureLink: "GENGHIS.jpg" },
    [HEROES.GUSTAV]: {"name": "Gustav", "type": TROOPTYPE.C, "copiesNeed":4, "paid": "N", pictureLink: "GUSTAV.jpg" },
    [HEROES.HARALDIII]: {"name": "Harald III", "type": TROOPTYPE.C, "copiesNeed":4, "paid": "N", pictureLink: "HARALD.jpg" },
    [HEROES.HEALER]: {"name": "Healer", "type": TROOPTYPE.C, "copiesNeed":4, "paid": "N", pictureLink: "HEALER.jpg" },
    [HEROES.HEAVENS]: {"name": "Heaven's", "type": TROOPTYPE.C, "copiesNeed":4, "paid": "N", pictureLink: "HEAVENS.jpg" },
    [HEROES.HELLFIRE]: {"name": "Hellfire", "type": TROOPTYPE.C, "copiesNeed":4, "paid": "N", pictureLink: "HELLFIRE.jpg" },
    [HEROES.HENRYV]: {"name": "HenryV", "type": TROOPTYPE.C, "copiesNeed":4, "paid": "N", pictureLink: "HENRYV.jpg" },
    [HEROES.HENRYII]: {"name": "HenryII", "type": TROOPTYPE.C, "copiesNeed":4, "paid": "N", pictureLink: "HENRYII.jpg" },
    [HEROES.HEROINEOFCOURAGE]: {"name": "Heroine", "type": TROOPTYPE.C, "copiesNeed":4, "paid": "N", pictureLink: "HEROINEOFCOURAGE.jpg" },
    [HEROES.HUNK]: {"name": "Hunk", "type": TROOPTYPE.C, "copiesNeed":4, "paid": "N", pictureLink: "HUNK.jpg" },
    [HEROES.I_GUARDIAN]: {"name": "I Guardian", "type": TROOPTYPE.C, "copiesNeed":4, "paid": "N", pictureLink: "IGUARDIAN.jpg" },
    [HEROES.IMMORTAL]: {"name": "Immortal", "type": TROOPTYPE.C, "copiesNeed":4, "paid": "N", pictureLink: "IMMORTAL.jpg" },
    [HEROES.INQUISITOR]: {"name": "Inquisitor", "type": TROOPTYPE.C, "copiesNeed":4, "paid": "N", pictureLink: "INQUISITOR.jpg" },
    [HEROES.ISABELLA]: {"name": "Isabella", "type": TROOPTYPE.C, "copiesNeed":34, "paid": "Y", pictureLink: "ISABELLA.jpg" },
    [HEROES.JADEEAGLE]: {"name": "Jade Eagle", "type": TROOPTYPE.C, "copiesNeed":4, "paid": "N", pictureLink: "JADEEAGLE.jpg" },
    [HEROES.JADERAKSHASA]: {"name": "Jade Rakshasa", "type": TROOPTYPE.C, "copiesNeed":4, "paid": "N", pictureLink: "JADERAKSHASA.jpg" },
    [HEROES.JANE]: {"name": "Jane", "type": TROOPTYPE.C, "copiesNeed":4, "paid": "N", pictureLink: "JANE.jpg" },
    [HEROES.JEANNE]: {"name": "Jeanne D'arc", "type": TROOPTYPE.C, "copiesNeed":34, "paid": "Y", pictureLink: "JEANNE.jpg" },
    [HEROES.JIGUANG]: {"name": "Jiguang", "type": TROOPTYPE.C, "copiesNeed":4, "paid": "N", pictureLink: "JIGUANG.jpg" },
    [HEROES.JOHN]: {"name": "John", "type": TROOPTYPE.C, "copiesNeed":4, "paid": "N", pictureLink: "JOHN.jpg" },
    [HEROES.KING_CNUT]: {"name": "King Cnut", "type": TROOPTYPE.C, "copiesNeed":4, "paid": "N", pictureLink: "KINGCNUT.jpg" },
    [HEROES.KUBLAI]: {"name": "Kublai", "type": TROOPTYPE.C, "copiesNeed":4, "paid": "N", pictureLink: "KUBLAI.jpg" },
    [HEROES.LANCELOT]: { "name": "Lancelot", "type": TROOPTYPE.C, "copiesNeed": 34, "paid": "Y", pictureLink: "LANCELOT.jpg" },
    [HEROES.LAWMAN]: {"name": "Lawman", "type": TROOPTYPE.C, "copiesNeed":4, "paid": "N", pictureLink: "LAWMAN.jpg" },
    [HEROES.LEONIDAS]: {"name": "Leonidas", "type": TROOPTYPE.C, "copiesNeed":4, "paid": "N", pictureLink: "LEONIDAS.jpg" },
    [HEROES.LIBERATOR]: {"name": "Liberator", "type": TROOPTYPE.C, "copiesNeed":4, "paid": "N", pictureLink: "LIBERATOR.jpg" },
    [HEROES.LILITH]: {"name": "Lilith", "type": TROOPTYPE.C, "copiesNeed":4, "paid": "N", pictureLink: "LILITH.jpg" },
    [HEROES.LIONHEART]: {"name": "Lionheart", "type": TROOPTYPE.C, "copiesNeed":4, "paid": "N", pictureLink: "LIONHEART.jpg" },
    [HEROES.LOUIS]: {"name": "Louis IX", "type": TROOPTYPE.C, "copiesNeed":4, "paid": "N", pictureLink: "LOUIS.jpg" },
    [HEROES.MARY]: {"name": "Mary Tudor", "type": TROOPTYPE.C, "copiesNeed":4, "paid": "N", pictureLink: "MARY.jpg" },
    [HEROES.NICOLAS_FLAMEL]: {"name": "Nicolas Flamel", "type": TROOPTYPE.C, "copiesNeed":4, "paid": "N", pictureLink: "NICOLASFLAMEL.jpg" },
    [HEROES.NORTHS_RAGE]: {"name": "North's Rage", "type": TROOPTYPE.C, "copiesNeed":4, "paid": "N", pictureLink: "NORTHSRAGE.jpg" },
    [HEROES.OCTAVIUS]: {"name": "Octavius", "type": TROOPTYPE.C, "copiesNeed":34, "paid": "Y", pictureLink: "OCTAVIUS.jpg" },
    [HEROES.PEACE]: {"name": "Peace", "type": TROOPTYPE.C, "copiesNeed":4, "paid": "N", pictureLink: "PEACE.jpg" },
    [HEROES.PEPIN]: {"name": "Pepin", "type": TROOPTYPE.C, "copiesNeed":4, "paid": "N", pictureLink: "PEPIN.jpg" },
    [HEROES.POISON_MASTER]: {"name": "Poison Master", "type": TROOPTYPE.C, "copiesNeed":4, "paid": "N", pictureLink: "POISON_MASTER.jpg" },
    [HEROES.POMPEY]: {"name": "Pompey", "type": TROOPTYPE.C, "copiesNeed":4, "paid": "N", pictureLink: "POMPEY.jpg" },
    [HEROES.QUEENANNE]: {"name": "QueenAnne", "type": TROOPTYPE.C, "copiesNeed":4, "paid": "N", pictureLink: "QUEENANNE.jpg" },
    [HEROES.RAGNAR]: {"name": "Ragnar", "type": TROOPTYPE.C, "copiesNeed":34, "paid": "Y", pictureLink: "RAGNAR.jpg" },
    [HEROES.RAINFOREST]: {"name": "Rainforest", "type": TROOPTYPE.C, "copiesNeed":4, "paid": "N", pictureLink: "RAINFOREST.jpg" },
    [HEROES.RAMSES]: {"name": "Ramses", "type": TROOPTYPE.C, "copiesNeed":34, "paid": "Y", pictureLink: "RAMSES.jpg" },
    [HEROES.ROKU]: {"name": "Roku Boshuten", "type": TROOPTYPE.C, "copiesNeed":4, "paid": "N", pictureLink: "ROKU.jpg" },
    [HEROES.ROLAND]: {"name": "Roland", "type": TROOPTYPE.C, "copiesNeed":4, "paid": "N", pictureLink: "ROLAND.jpg" },
    [HEROES.ROUGH]: {"name": "Rough", "type": TROOPTYPE.C, "copiesNeed":4, "paid": "N", pictureLink: "ROUGH.jpg" },
    [HEROES.ROZEN]: {"name": "Rozen", "type": TROOPTYPE.C, "copiesNeed":4, "paid": "N", pictureLink: "ROZEN.jpg" },
    [HEROES.SAKURA]: {"name": "Sakura", "type": TROOPTYPE.C, "copiesNeed":4, "paid": "N", pictureLink: "SAKURA.jpg" },
    [HEROES.SCARLET_REAVER]: {"name": "Scarlet Reaver", "type": TROOPTYPE.C, "copiesNeed":4, "paid": "N", pictureLink: "SCARLET_REAVER.jpg" },
    [HEROES.SKANDA]: {"name": "Skanda", "type": TROOPTYPE.C, "copiesNeed":4, "paid": "N", pictureLink: "SKANDA.jpg" },
    [HEROES.SKYBREAKER]: {"name": "Skybreaker", "type": TROOPTYPE.C, "copiesNeed":4, "paid": "N", pictureLink: "SKYBREAKER.jpg" },
    [HEROES.SOARING]: {"name": "Soaring Hawk", "type": TROOPTYPE.C, "copiesNeed":4, "paid": "N", pictureLink: "SOARING.jpg" },
    [HEROES.SPECTRAL_REAPER]: {"name": "Spectral Reaper", "type": TROOPTYPE.C, "copiesNeed":4, "paid": "N", pictureLink: "SPECTRAL_REAPER.jpg" },
    [HEROES.STEED]: {"name": "Steed", "type": TROOPTYPE.C, "copiesNeed":4, "paid": "N", pictureLink: "STEED.jpg" },
    [HEROES.SUNDIATA]: {"name": "Sundiata", "type": TROOPTYPE.C, "copiesNeed":4, "paid": "N", pictureLink: "SUNDIATA.jpg" },
    [HEROES.TARANTULA]: {"name": "Tarantula", "type": TROOPTYPE.C, "copiesNeed":4, "paid": "N", pictureLink: "TARANTULA.jpg" },
    [HEROES.THEODORA]: {"name": "Theodora", "type": TROOPTYPE.C, "copiesNeed":34, "paid": "Y", pictureLink: "THEODORA.jpg" },
    [HEROES.VALKYRIE]: {"name": "Valkyrie", "type": TROOPTYPE.C, "copiesNeed":4, "paid": "N", pictureLink: "VALKYRIE.jpg" },
    [HEROES.WARDEN]: {"name": "Warden", "type": TROOPTYPE.C, "copiesNeed":4, "paid": "N", pictureLink: "WARDEN.jpg" },
    [HEROES.WARHAMMER]: {"name": "Warhammer", "type": TROOPTYPE.C, "copiesNeed":4, "paid": "N", pictureLink: "WARHAMMER.jpg" },
    [HEROES.WARLORD]: {"name": "Warlord", "type": TROOPTYPE.C, "copiesNeed":4, "paid": "N", pictureLink: "WARLORD.jpg" },
    [HEROES.WILLIAM_CONQUEROR]: {"name": "William Conqueror", "type": TROOPTYPE.C, "copiesNeed":4, "paid": "N", pictureLink: "WILLIAM_CONQUEROR.jpg" },
    [HEROES.WILLIAM_WALLACE]: {"name": "William Wallace", "type": TROOPTYPE.C, "copiesNeed":4, "paid": "N", pictureLink: "WILLIAM_WALLACE.jpg" },
    [HEROES.WINDWALKER]: {"name": "Windwalker", "type": TROOPTYPE.C, "copiesNeed":4, "paid": "N", pictureLink: "WINDWALKER.jpg" },
    [HEROES.WITCH]: {"name": "Witch Hunter", "type": TROOPTYPE.C, "copiesNeed":4, "paid": "N", pictureLink: "WITCH.jpg" },
    [HEROES.YUKIMURA]: {"name": "Yukimura", "type": TROOPTYPE.C, "copiesNeed":4, "paid": "N", pictureLink: "YUKIMURA.jpg" },
        

};

export default herosData;