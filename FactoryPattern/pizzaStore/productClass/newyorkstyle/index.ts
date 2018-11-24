import Pizza from '../../Pizza';

export class NyStyleCheesePizza extends Pizza {
    constructor() {
        super();
        this.name = 'NY Style Sauce and Cheese Pizza';
        this.dough = 'Thin Crust Dough';
        this.sauce = 'Marinara sauce';

        this.toppings.push('Grated Reggino Cheese');
    }
}

export class NyStylePepporoniPizza extends Pizza {
    public prepare() {

    }

    public bake() {

    }

    public cut() {

    }

    public box() {
        
    }
}

export class NyStyleClamPizza extends Pizza {
    public prepare() {

    }

    public bake() {

    }

    public cut() {

    }

    public box() {
        
    }
}

export class NyStyleVeggiePizza extends Pizza {
    public prepare() {

    }

    public bake() {

    }

    public cut() {

    }

    public box() {
        
    }
}