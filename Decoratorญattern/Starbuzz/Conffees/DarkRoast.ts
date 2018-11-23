import Beverage from '../Beverage';

export default class DarkRoast extends Beverage {
    constructor() {
        super();
        this.description = 'Dark Roast Coffee';
    }

    const(): number {
        return 0.99;
    }
}