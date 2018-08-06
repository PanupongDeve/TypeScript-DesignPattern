import Character from './Character';
import KnifeBehavior from '../Weapon/KnifeBehavior';
export default class Queen extends Character {
    constructor() {
        super();
        this.weaponBehavior = new KnifeBehavior();
    }

    fight(): void {
        this.weaponBehavior.useWeapon();
    }
}