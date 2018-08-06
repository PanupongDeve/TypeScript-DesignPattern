import WeaponBehavior from './WeaponBehavior';

export default class BowAndArrowBehavior implements WeaponBehavior {
    useWeapon():void {
        console.log("I use arrow.");
    }
}