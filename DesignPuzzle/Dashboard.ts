import Queen from './Character/Queen';
import SwordBehavior from './Weapon/SwordBehavior';
import BowAndArrowBehavior from './Weapon/BowAndArrowBehavior';

const queen = new Queen();

queen.fight();
queen.setWeapon(new SwordBehavior);
queen.fight();
queen.setWeapon(new BowAndArrowBehavior);
queen.fight();
