import PizzaStore from './PizzaStore';
import Pizza from './Pizza';

import NYStylePizzaStore from './createClass/NYStylePizzaStore';

const nyStore: PizzaStore = new NYStylePizzaStore();
const pizza: Pizza = nyStore.orderPizza('cheese');
console.log(`Ta ordered a ${pizza.getName()}`);