import CondimentDecorator from '../CondimentDecorator';
import Beverage from '../Beverage';

export default class Mocha extends CondimentDecorator {
    beverage: Beverage;

    constructor(beverage: Beverage) {
        super();
        this.beverage = beverage;
    }

    getDescription(): String {
        return `${this.beverage.getDescription()}, Mocha`;
    }

    cost(): number {
        return 0.20 + this.beverage.cost();
    }
}