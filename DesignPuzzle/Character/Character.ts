import WeaponBehavior from '../Weapon/WeaponBehavior';

export default abstract class Character {
    weaponBehavior: WeaponBehavior;
    abstract fight();
    setWeapon(weapon: WeaponBehavior) {
        this.weaponBehavior = weapon;
    }
}