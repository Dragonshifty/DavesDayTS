export default class Cocktail {
    private _alcohol: string[];
    private _mixers: string[];
    private _extras: string[];
    private _name: string;

    constructor(
        name: string,
        alcohol: string[],
        mixers: string[],
        extras: string[]
    ) {
        this._name = name;
        this._alcohol = alcohol;
        this._mixers = mixers;
        this._extras = extras;
    }

    public get extras(): string[] {
        return this._extras;
    }

    public set extras(value: string[]) {
        this._extras = value;
    }

    public get mixers(): string[] {
        return this._mixers;
    }

    public set mixers(value: string[]) {
        this._mixers = value;
    }

    public get alcohol(): string[] {
        return this._alcohol;
    }

    public set alcohol(value: string[]) {
        this._alcohol = value;
    }

    public toString(): string {
        let contents = `${this._name}: `;

        if (this._alcohol) {
            contents += this._alcohol.join(", ") + " with ";
        }

        if (this._mixers) {
            contents += this._mixers.join(", ") + " and ";
        }

        if (this._extras) {
            contents += this._extras.join(", ") + ".";
        }

        return contents.trim();
    }
}
