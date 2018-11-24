
export default abstract class Pizza {
    name: string;
    dough: string;
    sauce: string;
    toppings: string[] = [];

    public prepare(): void {
        console.log(`Preparing ${this.name}`);
        console.log(`Tossing dough...`);
        console.log(`Adding sauce`);
        console.log(`Adding Toppins:`);
        this.toppings.forEach(topping => {
            console.log(`  ${topping}`);
        });
    }
    public bake(): void {
        console.log('Bake for 25 minutes at 350');
    }
    public cut(): void {
        console.log('Cutting the pizza into diagonal slices');
    }
    public box(): void {
        console.log('Place pizza in offical PizzaStore box');
    }

}