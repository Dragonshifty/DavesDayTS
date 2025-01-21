import Pizza from "./Pizza";

export default class Hawaiian implements Pizza {
    cookPizza(): void {}

    toString() {
        return "Hawaiian.";
    }
}
