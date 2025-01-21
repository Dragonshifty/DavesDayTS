import Pizza from "./Pizza";

export default class Margherita implements Pizza {
    cookPizza(): void {}

    toString() {
        return "Margherita.";
    }
}
