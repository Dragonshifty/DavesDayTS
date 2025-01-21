import Pizza from "./Pizza";

export default class Vegetarian implements Pizza {
    cookPizza(): void {}

    toString() {
        return "Vegetarian.";
    }
}
