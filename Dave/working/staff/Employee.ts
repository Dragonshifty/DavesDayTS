export default abstract class Employee {
    private _name: string;
    private _age: number;
    private _likeable: boolean;
    private _likes: string;
    private _hates: string;
    private _isHealthy;

    constructor(
        name: string,
        age: number,
        likeable: boolean,
        likes: string,
        hates: string,
        isHealthy: boolean
    ) {
        this._name = name;
        this._age = age;
        this._likeable = likeable;
        this._likes = likes;
        this._hates = hates;
        this._isHealthy = isHealthy;
    }

    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }

    public get age(): number {
        return this._age;
    }
    public set age(value: number) {
        this._age = value;
    }

    public get likeable(): boolean {
        return this._likeable;
    }
    public set likeable(value: boolean) {
        this._likeable = value;
    }

    public get likes(): string {
        return this._likes;
    }
    public set likes(value: string) {
        this._likes = value;
    }

    public get hates(): string {
        return this._hates;
    }
    public set hates(value: string) {
        this._hates = value;
    }

    public get isHealthy() {
        return this._isHealthy;
    }
    public set isHealthy(value) {
        this._isHealthy = value;
    }

    public attendMeeting(): void {}
}
