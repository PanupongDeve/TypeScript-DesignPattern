import Beverage from './Beverage';
import Expresso from './Conffees/Expresso';

const beverage: Beverage = new Expresso();

console.log(`${beverage.getDescription()} $${beverage.cost()}`);