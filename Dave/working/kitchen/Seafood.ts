import Pizza from "./Pizza";

export default class Seafood implements Pizza {
    cookPizza(): void {}

    toString() {
        return "Seafood.";
    }
}
