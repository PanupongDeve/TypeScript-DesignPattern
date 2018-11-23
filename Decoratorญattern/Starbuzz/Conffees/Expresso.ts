import Beverage from '../Beverage';

export default class Expresso extends Beverage {
    constructor() {
        super();
        this.description = 'Expresso';
    }

    const(): number {
        return 1.99;
    }
}