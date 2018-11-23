
export default abstract class Beverage {
    description: String = "Unknow Beverage";

    public getDescription(): String {
        return this.description;
    }

    public abstract const(): number;
}