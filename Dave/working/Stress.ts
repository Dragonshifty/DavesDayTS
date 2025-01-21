import Employee from "./staff/Employee";

export default class Stress {
    private static instance: Stress;

    public static getInstance(): Stress {
        if (!Stress.instance) {
            Stress.instance = new Stress();
        }
        return Stress.instance;
    }

    private foodInteractions: string[] = [];
    private drinkInteractions: string[] = [];
    private smileInteractions: string[] = [];

    private staffList: Employee[] = [];

    private workerSick: string = "";
    private score: number = 0;

    private staffInteractionsCount = new Map<string, number>([
        ["Brian", 0],
        ["Sarah", 0],
        ["Jeremy", 0],
        ["Laura", 0],
    ]);

    private foodAndDrinkInteractionsCount = new Map<string, number>([
        ["Anchovies", 0],
        ["Vodka", 0],
    ]);

    private daveToStaffPercentages = new Map<string, number>([
        ["Brian", 0],
        ["Sarah", 0],
        ["Jeremy", 0],
        ["Laura", 0],
    ]);

    private constructor() {}

    public getSickWorker(): string {
        return this.workerSick;
    }

    public setSickWorker(workerSick: string): void {
        this.workerSick = workerSick;
    }

    public setStaffList(staffList: Employee[]): void {
        this.staffList = staffList;
    }

    public addFoodInteraction(action: string) {
        const foodLength: number = this.foodInteractions.length;
        if (foodLength !== 0) {
            if (this.foodInteractions[foodLength - 1].endsWith("cooked. ")) {
                const lastEntry: string = this.foodInteractions.pop()!;
                this.foodInteractions.push(lastEntry + action);
            } else {
                this.foodInteractions.push(action);
            }
        } else {
            this.foodInteractions.push(action);
        }
    }

    public addDrinkInteraction(action: string) {
        const drinksLength: number = this.drinkInteractions.length;
        if (drinksLength !== 0) {
            if (
                this.drinkInteractions[drinksLength - 1].endsWith("prepared. ")
            ) {
                const lastEntry: string = this.drinkInteractions.pop()!;
                this.drinkInteractions.push(lastEntry + action);
            } else {
                this.drinkInteractions.push(action);
            }
        } else {
            this.drinkInteractions.push(action);
        }
    }

    public addSmileInteraction(action: string) {
        this.smileInteractions.push(action);
    }

    logFoodAndDrinkInteractionsCount(): void {
        let countDrink = this.drinkInteractions.filter(
            (x) => x.includes("Dave") && x.includes("Vodka")
        ).length;
        this.foodAndDrinkInteractionsCount.set("Vodka", countDrink);

        let countFood = this.foodInteractions.filter(
            (x) =>
                x.includes("Dave") &&
                (x.includes("Special") || x.includes("Seafood"))
        ).length;
        this.foodAndDrinkInteractionsCount.set("Anchovies", countFood);
    }

    logStaffInteractions(): void {
        const foodAndDrink: string[] = this.foodInteractions.concat(
            this.drinkInteractions
        );

        for (let interaction of foodAndDrink) {
            if (interaction.includes("Dave")) {
                for (let employee of this.staffList) {
                    if (
                        interaction.includes(employee.name) &&
                        employee.name !== "Dave"
                    ) {
                        this.staffInteractionsCount.set(
                            employee.name,
                            this.staffInteractionsCount.get(employee.name)! + 1
                        );
                    }
                }
            }
        }
    }

    logSmileInteractions(): void {
        if (this.smileInteractions.length !== 0) {
            const countDaveSmiles = this.smileInteractions.filter((x) =>
                x.includes("Dave")
            ).length;
            const totalSmiles = this.smileInteractions.length;

            const percentage = Math.round(
                (countDaveSmiles / totalSmiles) * 100
            );

            const scoreTemp = percentage > 50 ? 50 - percentage : 0;

            this.score += scoreTemp;
        }
    }

    staffPercentages(): void {
        for (const employee of this.staffList) {
            if (employee.name === "Dave" || employee.name === "Steve") continue;

            const totalFoodWorked: number = this.foodInteractions.filter((x) =>
                x.includes(employee.name)
            ).length;
            const totalDrinksWorked: number = this.drinkInteractions.filter(
                (x) => x.includes(employee.name)
            ).length;

            if (totalFoodWorked !== 0) {
                const percentage: number = Math.round(
                    (this.staffInteractionsCount.get(employee.name)! /
                        totalFoodWorked) *
                        100
                );
                this.daveToStaffPercentages.set(employee.name, percentage);
            }

            if (totalDrinksWorked !== 0) {
                const percentage: number = Math.round(
                    (this.staffInteractionsCount.get(employee.name)! /
                        totalDrinksWorked) *
                        100
                );
                this.daveToStaffPercentages.set(employee.name, percentage);
            }
        }
    }

    assignStaffPoints(): void {
        for (const employee of this.staffList) {
            if (employee.name === "Dave" || employee.name === "Steve") continue;

            let scoreTemp: number = 0;
            let percentageHold: number = this.daveToStaffPercentages.get(
                employee.name
            )!;

            if (percentageHold !== 0 && employee.likeable) {
                if (percentageHold > 50) {
                    scoreTemp += percentageHold - 50;
                    if (employee.name === "Sarah") {
                        scoreTemp *= 2;
                        this.score += scoreTemp;
                    } else {
                        this.score += percentageHold - 50;
                    }
                } else {
                    scoreTemp -= 50 - percentageHold;
                    this.score -= 50 - percentageHold;
                }
            } else if (percentageHold !== 0 && !employee.likeable) {
                if (percentageHold > 50) {
                    scoreTemp -= percentageHold - 50;
                    this.score -= percentageHold - 50;
                } else {
                    scoreTemp += 50 - percentageHold;
                    this.score += 50 - percentageHold;
                }
            }
        }
    }

    assignFoodLikes(): void {
        const foodAndDrinkScore =
            this.foodAndDrinkInteractionsCount.get("Vodka")! -
            this.foodAndDrinkInteractionsCount.get("Anchovies")!;

        this.score += foodAndDrinkScore;
    }

    showFoodInteractions(): void {
        for (let item of this.foodInteractions) {
            console.log(item);
        }
    }

    showDrinksInteractions(): void {
        for (let item of this.drinkInteractions) {
            console.log(item);
        }
    }

    getFinalScore(): number {
        const tempNumber: number = this.score;
        return tempNumber;
    }

    getFoodAndDrinkInteractions(): string[] {
        return this.foodInteractions.concat(this.drinkInteractions);
    }

    getSmileInteractions(): string[] {
        return this.smileInteractions;
    }

    resetDay(): void {
        this.foodInteractions = [];
        this.drinkInteractions = [];
        this.smileInteractions = [];

        this.score = 0;

        this.workerSick = "";

        this.staffInteractionsCount.forEach((_, key) => {
            this.staffInteractionsCount.set(key, 0);
        });

        this.foodAndDrinkInteractionsCount.forEach((_, key) => {
            this.foodAndDrinkInteractionsCount.set(key, 0);
        });

        this.daveToStaffPercentages.forEach((_, key) => {
            this.daveToStaffPercentages.set(key, 0);
        });
    }
}
