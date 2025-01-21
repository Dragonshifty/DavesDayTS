import Cocktail from "./Cocktail";

export default class CocktailBuilder {
    private name: string = "";
    private alcohol: string[] | null = null;
    private mixers: string[] | null = null;
    private extras: string[] | null = null;

    setName(name: string | null): CocktailBuilder {
        this.name = name !== null ? name : "Unnamed";
        return this;
    }

    setAlcohol(alcohol: string[] | null): CocktailBuilder {
        this.alcohol = alcohol !== null ? alcohol : ["No alcohol"];
        return this;
    }

    setMixers(mixers: string[] | null): CocktailBuilder {
        this.mixers = mixers !== null ? mixers : ["no mixers"];
        return this;
    }

    setExtras(extras: string[] | null): CocktailBuilder {
        this.extras = extras !== null ? extras : ["no extras"];
        return this;
    }

    build(): Cocktail {
        const alcohol = this.alcohol ?? ["No alcohol"];
        const mixers = this.mixers ?? ["No mixers"];
        const extras = this.extras ?? ["No extras"];
        return new Cocktail(this.name, alcohol, mixers, extras);
    }
}
