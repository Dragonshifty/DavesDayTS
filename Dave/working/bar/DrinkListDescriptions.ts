import Cocktail from "./Cocktail";
import DrinkList from "./DrinkList";

export default class DrinkListDescriptions {
    cocktailList: string[] = [
        "Mojito",
        "Espresso Martini",
        "Shirley Temple",
        "Long Island Iced Tea",
        "Screwdriver",
        "Singapore Sling",
        "Woo Woo",
        "Strawberry Daiquiri",
        "Dark and Stormy",
        "Negroni",
        "Ginger Appletini",
    ];

    allDescriptions: Map<string, string> = new Map<string, string>();

    drinkList: DrinkList = new DrinkList();

    getAllDescriptions(): Map<string, string> {
        for (var drink of this.cocktailList) {
            const cocktail: Cocktail =
                this.drinkList.getCocktail(drink) ??
                new Cocktail("water", ["nothing"], ["nothing"], ["nothing"]);

            const cocktailDescription: string = cocktail.toString();

            const result: string[] = cocktailDescription.split(":");

            this.allDescriptions.set(result[0], result[1]);
        }
        return this.allDescriptions;
    }
}
