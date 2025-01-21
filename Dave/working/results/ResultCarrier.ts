export default class ResultCarrier {
    private _score: number;

    private _message: string;

    constructor(score: number, message: string) {
        this._score = score;
        this._message = message;
    }

    public get score(): number {
        return this._score;
    }
    public set score(value: number) {
        this._score = value;
    }

    public get message(): string {
        return this._message;
    }
    public set message(value: string) {
        this._message = value;
    }
}
