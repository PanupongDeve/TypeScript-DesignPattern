import PizzaStore from '../PizzaStore';
import Pizza from '../Pizza';

import {
    NyStyleCheesePizza,
    NyStyleClamPizza,
    NyStylePepporoniPizza,
    NyStyleVeggiePizza
} from '../productClass/newyorkstyle';

export default class NYStylePizzaStore extends PizzaStore {
    public createPizza(type: string): Pizza {
        let pizza: Pizza;
        if (type === 'cheese') {
            pizza = new NyStyleCheesePizza();
        } else if (type === 'pepperoni') {
            pizza = new NyStyleClamPizza();
        } else if (type === 'clam') {
            pizza = new NyStylePepporoniPizza();
        } else if (type === 'veggie') {
            pizza = new NyStyleVeggiePizza();
        }

        return pizza;
    }
}