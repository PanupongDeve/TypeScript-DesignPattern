import CondimentDecorator from '../CondimentDecorator';
import Beverage from '../Beverage';

export default class Whip extends CondimentDecorator {
    beverage: Beverage;

    constructor(beverage: Beverage) {
        super();
        this.beverage = beverage;
    }

    getDescription(): String {
        return `${this.beverage.getDescription()}, Whip`;
    }

    cost(): number {
        return 0.10 + this.beverage.cost();
    }
}