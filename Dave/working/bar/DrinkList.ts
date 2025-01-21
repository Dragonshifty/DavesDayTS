import Cocktail from "./Cocktail";
import CocktailBuilder from "./CocktailBuilder";

export default class DrinkList {
    getMojito(): Cocktail {
        return new CocktailBuilder()
            .setName("Mojito")
            .setAlcohol(["Rum"])
            .setMixers(["Soda"])
            .setExtras(["sugar", "mint", "lime"])
            .build();
    }

    getEspressoMartini(): Cocktail {
        return new CocktailBuilder()
            .setName("Espresso Martini")
            .setAlcohol(["Vodka", "Coffee liqueur"])
            .setMixers(["Espresso Coffee"])
            .setExtras(["Coffee Beans"])
            .build();
    }

    getShirleyTemple(): Cocktail {
        return new CocktailBuilder()
            .setName("Shirley Temple")
            .setAlcohol(null)
            .setMixers(["Ginger Ale", "Grenadine"])
            .setExtras(["Maraschino Cherry"])
            .build();
    }

    getLongIslandIcedTea(): Cocktail {
        return new CocktailBuilder()
            .setName("Long Island Iced Tea")
            .setAlcohol(["Vodka", "Gin", "Tequila", "Rum", "Triple Sec"])
            .setMixers(["Cola", "Lime Juice"])
            .setExtras(["Limes"])
            .build();
    }

    getScrewdriver(): Cocktail {
        return new CocktailBuilder()
            .setName("Screwdriver")
            .setAlcohol(["Vodka"])
            .setMixers(["Angostura Bitters"])
            .setExtras(["Orange", "Clementine"])
            .build();
    }

    getSingaporeSling(): Cocktail {
        return new CocktailBuilder()
            .setName("Singapore Sling")
            .setAlcohol(["Gin", "Cherry Brandy", "Benedictine"])
            .setMixers(["Angostura Bitters", "Pinaeapple Juice", "Lime Juice"])
            .setExtras(["Pineapple", "Cocktail Cherry"])
            .build();
    }

    getWooWoo(): Cocktail {
        return new CocktailBuilder()
            .setName("Woo Woo")
            .setAlcohol(["Vodka", "Peach Schnapps"])
            .setMixers(["Cranberry Juice", "Lime Juice"])
            .setExtras(["Lime"])
            .build();
    }

    getStrawberryDaiquiri(): Cocktail {
        return new CocktailBuilder()
            .setName("Strawberry Daiquiri")
            .setAlcohol(["Rum"])
            .setMixers(["Blended Strawberries", "Lime Juice", "Sugar Syrup"])
            .setExtras(["Lime", "Strawberry"])
            .build();
    }

    getDarkandStormy(): Cocktail {
        return new CocktailBuilder()
            .setName("Dark and Stormy")
            .setAlcohol(["Rum"])
            .setMixers(["Ginger Beer"])
            .setExtras(null)
            .build();
    }

    getNegroni(): Cocktail {
        return new CocktailBuilder()
            .setName("Negroni")
            .setAlcohol(["Gin", "Vermouth", "Campari"])
            .setMixers(null)
            .setExtras(["Orange"])
            .build();
    }

    getGingerAppletini(): Cocktail {
        return new CocktailBuilder()
            .setName("Ginger Appletini")
            .setAlcohol(null)
            .setMixers(["Apple Juice", "Ginger Beer"])
            .setExtras(["Apple"])
            .build();
    }

    getCocktail(cocktail: string): Cocktail | null {
        switch (cocktail) {
            case "Mojito":
                return this.getMojito();
            case "Espresso Martini":
                return this.getEspressoMartini();
            case "Shirley Temple":
                return this.getShirleyTemple();
            case "Long Island Iced Tea":
                return this.getLongIslandIcedTea();
            case "Screwdriver":
                return this.getScrewdriver();
            case "Singapore Sling":
                return this.getSingaporeSling();
            case "Woo Woo":
                return this.getWooWoo();
            case "Strawberry Daiquiri":
                return this.getStrawberryDaiquiri();
            case "Dark and Stormy":
                return this.getDarkandStormy();
            case "Negroni":
                return this.getNegroni();
            case "Ginger Appletini":
                return this.getGingerAppletini();
            default:
                return null;
        }
    }
}
