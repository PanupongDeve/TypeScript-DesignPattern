import PizzaStore from '../PizzaStore';
import Pizza from '../Pizza';

import {
    ChicagoStyleCheesePizza,
    ChicagoStyleClamPizza,
    ChicagoStylePepporoniPizza,
    ChicagoStyleVeggiePizza
} from '../productClass/chicagostyle';

export class ChicagoStylePizzaStore extends PizzaStore {
    public createPizza(type: string): Pizza {
        let pizza: Pizza;
        if (type === 'cheese') {
            pizza = new ChicagoStyleCheesePizza();
        } else if (type === 'pepperoni') {
            pizza = new ChicagoStylePepporoniPizza();
        } else if (type === 'clam') {
            pizza = new ChicagoStyleClamPizza();
        } else if (type === 'veggie') {
            pizza = new ChicagoStyleVeggiePizza();
        }

        return pizza;
    }
}