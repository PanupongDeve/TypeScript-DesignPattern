import Beverage from '../Beverage';

export default class Decaf extends Beverage {
    constructor() {
        super();
        this.description = 'Decaf Coffee';
    }

    const(): number {
        return 1.05;
    }
}