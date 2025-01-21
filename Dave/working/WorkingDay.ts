import Cocktail from "./bar/Cocktail";
import Customers from "./customers/Customers";
import Events from "./customers/Events";
import Margherita from "./kitchen/Margherita";
import Pizza from "./kitchen/Pizza";
import AnalyseForMessage from "./results/AnalyseForMessage";
import ResultCarrier from "./results/ResultCarrier";
import BarKeep from "./staff/BarKeep";
import Chef from "./staff/Chef";
import Employee from "./staff/Employee";
import StaffAdmin from "./staff/StaffAdmin";
import Waiter from "./staff/Waiter";
import Stress from "./Stress";

export default class WorkingDay {
    private stress: Stress;

    constructor() {
        this.stress = Stress.getInstance();
    }

    jeremy: BarKeep = new BarKeep("Jeremy", 22, true, "Wine", "Rudeness", true);
    laura: BarKeep = new BarKeep("Laura", 24, false, "Sarah", "Politics", true);
    brian: Chef = new Chef("Brian", 33, false, "Politics", "People", true);
    sarah: Chef = new Chef("Sarah", 41, true, "Cats", "Pineapple", true);
    steve: Waiter = new Waiter("Steve", 30, true, "Gaming", "Cold", true);
    dave: Waiter = new Waiter("Dave", 45, true, "Sarah", "Anchovies", true);

    customers: Customers = new Customers();
    staffAdmin: StaffAdmin = new StaffAdmin();
    events: Events = new Events();

    randomEvent: string = "No event";
    eventHappened: boolean = false;

    staffList: Employee[] = [
        this.jeremy,
        this.laura,
        this.brian,
        this.sarah,
        this.steve,
        this.dave,
    ];

    newDay(): ResultCarrier {
        this.morningShift();
        this.lunchtimeShift();
        this.eveningShift();
        const result: ResultCarrier = this.endOfDay();
        return result;
    }

    isManagementIn(): boolean {
        const possible: number = Math.floor(Math.random() * 5);
        if (possible === 4) {
            for (const staff of this.staffList) {
                staff.attendMeeting();
            }
            return true;
        }
        return false;
    }

    serveCustomers(): void {
        const groups: number = Math.floor(Math.random() * 11) + 5;

        const managementIn = this.isManagementIn();

        let tempFood: string[] = [];
        let tempDrink: string[] = [];
        let foodCounter: number = 0;
        let drinksCOunter: number = 0;

        for (let i = 0; i <= groups; i++) {
            const foodOrder: string[] = this.customers.getFoodOrder();
            const drinksOrder: string[] = this.customers.getDrinksOrder();

            for (const order of foodOrder) {
                let waiter: Waiter =
                    Math.floor(Math.random() * 2) === 0
                        ? this.dave
                        : this.steve;
                let chef: Chef =
                    Math.floor(Math.random() * 2) === 0
                        ? this.brian
                        : this.sarah;

                if (!this.dave.isHealthy) waiter = this.steve;
                if (!this.steve.isHealthy) waiter = this.dave;
                if (!this.brian.isHealthy) chef = this.sarah;
                if (!this.sarah.isHealthy) chef = this.brian;

                // waiter.serveFood(chef.cookFood(order) ?? new Margherita());
                const pizza: Pizza = waiter.serveFood(
                    chef.cookFood(order) ?? new Margherita()
                );
                tempFood.push(pizza.toString());
                foodCounter++;

                if (managementIn) {
                    waiter.smile();
                }
            }

            for (const drink of drinksOrder) {
                let waiter: Waiter =
                    Math.floor(Math.random() * 2) === 0
                        ? this.dave
                        : this.steve;
                let barKeep: BarKeep =
                    Math.floor(Math.random() * 2) === 0
                        ? this.jeremy
                        : this.laura;

                if (!this.dave.isHealthy) waiter = this.steve;
                if (!this.steve.isHealthy) waiter = this.dave;
                if (!this.jeremy.isHealthy) barKeep = this.laura;
                if (!this.laura.isHealthy) barKeep = this.jeremy;

                const cocktail: Cocktail = waiter.serveDrink(
                    barKeep.makeDrink(drink) ??
                        new Cocktail(
                            "water",
                            ["nothing"],
                            ["nothing"],
                            ["nothing"]
                        )
                );

                tempDrink.push(cocktail.toString());
                drinksCOunter++;

                if (managementIn)
                    this.stress.addSmileInteraction(
                        waiter.name + waiter.smile()
                    );
            }
        }
    }

    morningShift(): void {
        this.staffAdmin.staffOffSick(this.staffList);
        this.serveCustomers();
        this.checkForEvent();
    }

    lunchtimeShift(): void {
        this.serveCustomers();
        if (!this.eventHappened) this.checkForEvent();
    }

    eveningShift(): void {
        this.serveCustomers();
        if (!this.eventHappened) this.checkForEvent();
    }

    checkForEvent(): void {
        this.randomEvent = this.events.checkForRandomEvent();
        if (this.randomEvent !== "No event") this.eventHappened = true;
    }

    calculateScore(score: number): string {
        if (score > 0) {
            return "Dave had a good day!";
        }

        return "Dave had a bad day!";
    }

    resetWorkingDay(): void {
        this.eventHappened = false;
        this.randomEvent = "No event";
    }

    getMessage(): string {
        const score: number = this.stress.getFinalScore();
        const sickEmployee = this.stress.getSickWorker();
        const foodAndDrinkInteractions: string[] =
            this.stress.getFoodAndDrinkInteractions();
        const smileInteractions: string[] = this.stress.getSmileInteractions();

        const analyseForMessage = new AnalyseForMessage(
            sickEmployee,
            foodAndDrinkInteractions,
            smileInteractions,
            score,
            this.randomEvent
        );

        return analyseForMessage.getMessage();
    }

    endOfDay(): ResultCarrier {
        this.stress.setStaffList(this.staffList);
        this.stress.logStaffInteractions();
        this.stress.logFoodAndDrinkInteractionsCount();
        this.stress.logSmileInteractions();
        this.stress.staffPercentages();
        this.stress.assignFoodLikes();
        this.stress.assignStaffPoints();

        const score: number = this.stress.getFinalScore();
        const daveOutcomeText: string = this.getMessage();

        const result = new ResultCarrier(score, daveOutcomeText);

        this.stress.resetDay();
        this.resetWorkingDay();

        return result;
    }
}
