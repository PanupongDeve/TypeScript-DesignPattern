import CondimentDecorator from '../CondimentDecorator';
import Beverage from '../Beverage';

export default class Soy extends CondimentDecorator {
    beverage: Beverage;

    constructor(beverage: Beverage) {
        super();
        this.beverage = beverage;
    }

    getDescription(): String {
        return `${this.beverage.getDescription()}, Soy`;
    }

    cost(): number {
        return 0.15 + this.beverage.cost();
    }
}