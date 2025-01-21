import Pizza from "./Pizza";
import Hawaiian from "./Hawaiian";
import Margherita from "./Margherita";
import Pepperoni from "./Pepperoni";
import Vegetarian from "./Vegetarian";
import Special from "./Special";
import Seafood from "./Seafood";

export default class PizzaOven {
    getPizza(flavour: string | null): Pizza | null {
        if (flavour !== null) {
            switch (flavour) {
                case "Margherita":
                    return new Margherita();
                case "Pepperoni":
                    return new Pepperoni();
                case "Hawaiian":
                    return new Hawaiian();
                case "Vegetarian":
                    return new Vegetarian();
                case "Special":
                    return new Special();
                case "Seafood":
                    return new Seafood();
                default:
                    return null;
            }
        }
        return null;
    }
}
