import Pizza from "./Pizza";

export default class Pepperoni implements Pizza {
    cookPizza(): void {}

    toString() {
        return "Pepperoni.";
    }
}
