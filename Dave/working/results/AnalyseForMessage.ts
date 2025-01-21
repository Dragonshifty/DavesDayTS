import Cocktail from "../bar/Cocktail";
import DrinkList from "../bar/DrinkList";

export default class AnalyseForMessage {
    private sickEmployee: string;
    private foodAndDrinkInteractions: string[];
    private smileInteractions: string[];
    private score: number;
    private event: string;

    constructor(
        sickEmployee: string,
        foodAndDrinkInteractions: string[],
        smileInteractions: string[],
        score: number,
        event: string
    ) {
        this.sickEmployee = sickEmployee;
        this.foodAndDrinkInteractions = foodAndDrinkInteractions;
        this.smileInteractions = smileInteractions;
        this.score = score;
        this.event = event;
    }

    drinkList: DrinkList = new DrinkList();

    pizzaList: string[] = [
        "Margherita",
        "Pepperoni",
        "Hawaiian",
        "Vegetarian",
        "Special",
        "Seafood",
    ];

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

    calculateScore(score: number): string {
        if (score > 0) return "Dave had a good day!\n\n";
        return "Dave had a bad day!\n\n";
    }

    getMessage(): string {
        if (this.sickEmployee === "Dave") return "Dave was off ill today. ";

        let message: string = "";

        message = this.calculateScore(this.score);

        if (this.sickEmployee !== "") {
            message += `${this.sickEmployee} was off ill today. `;
            if (this.sickEmployee === "Sarah") {
                message += "This makes Dave sad. ";
            }
        }

        if (this.event !== "No event") {
            message += this.event;
        }

        const reportSmiles = Math.random() < 0.3;

        if (reportSmiles && this.smileInteractions.length > 0) {
            message += this.getSmiles();
        }

        const reportPizzaOrCocktail = Math.random() < 0.3;

        if (reportPizzaOrCocktail) {
            const isPizza = Math.random() < 0.5;
            if (isPizza) {
                message += this.getRandomPizza();
            } else {
                message += this.getRandomCocktail();
            }
        }
        return message;
    }

    getRandomPizza(): string {
        const randomPizza: number = Math.floor(
            Math.random() * this.pizzaList.length
        );
        const pizza: string = this.pizzaList[randomPizza];

        const randomPizzaCount: number = this.foodAndDrinkInteractions.filter(
            (x) => x.includes("Dave") && x.includes(pizza)
        ).length;

        const pizzasDaveServed: number = this.foodAndDrinkInteractions.filter(
            (x) => x.includes("Dave") && x.includes("cooked")
        ).length;

        switch (pizza) {
            case "Margherita":
                return `Of the ${pizzasDaveServed} pizzas Dave served, ${randomPizzaCount} were Margheritas. All the cheese. `;
            case "Pepperoni":
                const slices: number =
                    Math.floor(Math.random() * (20 - 10 + 1)) + 10;
                const totalPepperoni: number = randomPizzaCount * slices;
                return `Dave served roughly ${totalPepperoni} slices of pepperoni across all the ${randomPizzaCount} pepperoni pizzas today. `;
            case "Hawaiian":
                const pineapple: number =
                    Math.floor(Math.random() * (25 - 15 + 1)) + 15;
                const totalPineapple: number = randomPizzaCount * pineapple;
                return `Of the ${randomPizzaCount} Hawaiian pizzas Dave served, pineapple haters would have on average ${totalPineapple} objections. `;
            case "Vegetarian":
                const vegetarianPercent = Math.floor(
                    (randomPizzaCount / pizzasDaveServed) * 100
                );
                return `${vegetarianPercent}% of the pizzas Dave served today were vegetarian. `;
            case "Special":
                const percentageRemoved: number =
                    Math.random() * (0.1 - 0.05) + 0.05;
                const anchovyRemovalCount: number = Math.floor(
                    randomPizzaCount * percentageRemoved
                );
                if (anchovyRemovalCount === 0) {
                    return `Much to Dave's dissaproval, no-one removed anchovies from the ${randomPizzaCount} special pizzas he served. `;
                }
                return `Much to Dave's approval, of the ${randomPizzaCount} Special pizzas served, approximately ${anchovyRemovalCount} people removed the anchovies. `;
            case "Seafood":
                return `Dave served ${randomPizzaCount} Seafood pizzas. Which, for Dave, is ${randomPizzaCount} too many. `;
            default:
                return `Dave served ${randomPizzaCount} ${pizza} pizzas. `;
        }
    }

    getRandomCocktail(): string {
        const randomCocktail: number = Math.floor(
            Math.random() * this.cocktailList.length
        );
        const cocktailChoice: string = this.cocktailList[randomCocktail];

        const cockTail: Cocktail =
            this.drinkList.getCocktail(cocktailChoice) ??
            new Cocktail("water", ["nothing"], ["nothing"], ["nothing"]);

        const randomCocktailCount: number =
            this.foodAndDrinkInteractions.filter(
                (x) => x.includes("Dave") && x.includes(cocktailChoice)
            ).length;

        const cocktailsServed: number = this.foodAndDrinkInteractions.filter(
            (x) => x.includes("Dave") && x.includes("prepared")
        ).length;

        return `Of the ${cocktailsServed} cocktails Dave served. ${randomCocktailCount} ordered a ${cockTail.toString()}`;
    }

    getSmiles(): string {
        if (this.smileInteractions.length === 0) return "";

        const daveSmiles = this.smileInteractions.filter((x) =>
            x.includes("Dave")
        ).length;
        const steveSmiles = this.smileInteractions.filter((x) =>
            x.includes("Steve")
        ).length;

        if (daveSmiles > 0 && steveSmiles > 0) {
            if (daveSmiles === steveSmiles) {
                return `Management was in. Dave and Steve smiled ${daveSmiles} times throughout the day. `;
            }
            if (daveSmiles > steveSmiles) {
                return `Looks like management was in. Dave was slightly annoyed he had to force ${
                    daveSmiles - steveSmiles
                } more smiles than Steve - ${daveSmiles} times. Not to mention the meetings. `;
            }
            if (daveSmiles < steveSmiles) {
                return `Management in - meetings. Dave was glad he smiled ${
                    steveSmiles - daveSmiles
                } times less than Steve. ${daveSmiles} to ${steveSmiles} smiles. `;
            }
        } else if (daveSmiles > 0 && steveSmiles === 0) {
            return `Management was in but Steve wasn't. Dave had to smile ${daveSmiles} time today.`;
        }
        return "";
    }
}
