import Cocktail from "../bar/Cocktail";
import DrinkList from "../bar/DrinkList";
import Stress from "../Stress";
import Employee from "./Employee";
import Staff from "./Staff";

export default class BarKeep extends Employee implements Staff {
    private stress: Stress;
    drinkList: DrinkList = new DrinkList();

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

    makeDrink(cocktail: string): Cocktail | null {
        this.stress.addDrinkInteraction(this.name + " prepared. ");

        return this.drinkList.getCocktail(cocktail);
    }
}
