import Cocktail from "../bar/Cocktail";
import Pizza from "../kitchen/Pizza";
import Stress from "../Stress";
import Employee from "./Employee";
import Serve from "./Serve";
import Staff from "./Staff";

export default class Waiter extends Employee implements Staff, Serve {
    private stress: Stress;

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

    serveFood(pizza: Pizza): Pizza {
        this.stress.addFoodInteraction(this.name + " served " + pizza);
        return pizza;
    }
    serveDrink(cocktail: Cocktail): Cocktail {
        this.stress.addDrinkInteraction(this.name + " served " + cocktail);
        return cocktail;
    }
    smile(): void {
        this.stress.addSmileInteraction(this.name + " smiled.");
    }
}
