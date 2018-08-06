import WeaponBehavior from './WeaponBehavior';

export default class AxeBehavior implements WeaponBehavior {
    useWeapon(): void {
        console.log(" I use axe");
    }
}