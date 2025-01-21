import Pizza from "../kitchen/Pizza";
import PizzaOven from "../kitchen/PizzaOven";
import Stress from "../Stress";
import Employee from "./Employee";
import Staff from "./Staff";

export default class Chef extends Employee implements Staff {
    private stress: Stress;
    oven: PizzaOven = new PizzaOven();

    constructor(
        name: string,
        age: number,
        likeable: boolean,
        likes: string,
        hates: string,
        isHealthy: boolean
    ) {
        super(name, age, likeable, likes, hates, isHealthy);
        this.stress = Stress.getInstance();
    }

    smile(): void {
        this.stress.addSmileInteraction(this.name + " smiled.");
    }

    cookFood(flavour: string): Pizza | null {
        this.stress.addFoodInteraction(this.name + " cooked. ");

        return this.oven.getPizza(flavour);
    }
}
