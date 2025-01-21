import Cocktail from "../bar/Cocktail";
import Pizza from "../kitchen/Pizza";

export default interface Serve {
    serveFood(pizza: Pizza): Pizza;
    serveDrink(cocktail: Cocktail): Cocktail;
}
