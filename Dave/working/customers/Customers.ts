export default class Customers {
    private foodMenu: string[] = [
        "Margherita",
        "Pepperoni",
        "Hawaiian",
        "Vegetarian",
        "Special",
        "Seafood",
    ];

    private drinksMenu: string[] = [
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

    foodMenuSize: number = this.foodMenu.length;
    drinksMenuSize: number = this.drinksMenu.length;

    getFoodOrder(): string[] {
        const foodOrder: string[] = [];
        const partyNumber: number = Math.floor(Math.random() * 11) + 1;

        for (let i = 0; i < partyNumber; i++) {
            const menuChoice: number = Math.floor(
                Math.random() * this.foodMenuSize
            );
            foodOrder.push(this.foodMenu[menuChoice]);
        }
        return foodOrder;
    }

    getDrinksOrder(): string[] {
        const drinksOrder: string[] = [];
        const partyNumber: number = Math.floor(Math.random() * 11) + 1;

        for (let i = 0; i < partyNumber; i++) {
            const menuChoice: number = Math.floor(
                Math.random() * this.drinksMenuSize
            );
            drinksOrder.push(this.drinksMenu[menuChoice]);
        }
        return drinksOrder;
    }
}
