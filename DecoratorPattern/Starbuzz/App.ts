import Beverage from './Beverage';
import Expresso from './Conffees/Expresso';
import DarkRoast from './Conffees/DarkRoast';
import HouseBlend from './Conffees/HouseBlend';
import Mocha from './Condiment/Mocha';
import Whip from './Condiment/Whip';
import Soy from './Condiment/Soy';

const beverage: Beverage = new Expresso();

console.log(`${beverage.getDescription()} $${beverage.cost()}`);

let beverage2: Beverage = new DarkRoast();
beverage2 = new Mocha(beverage2);
beverage2 = new Mocha(beverage2);
beverage2 = new Whip(beverage2);

console.log(`${beverage2.getDescription()} $${beverage2.cost()}`);

let beverage3: Beverage = new HouseBlend();
beverage3 = new Soy(beverage3);
beverage3 = new Mocha(beverage3);
beverage3 = new Whip(beverage3);

console.log(`${beverage3.getDescription()} $${beverage3.cost()}`);