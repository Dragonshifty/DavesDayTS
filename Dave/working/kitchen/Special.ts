import Pizza from "./Pizza";

export default class Special implements Pizza {
    cookPizza(): void {}

    toString() {
        return "Special.";
    }
}
