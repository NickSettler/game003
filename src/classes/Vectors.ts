export class Vector1D {
    private readonly _a: number;

    constructor(a: number) {
        this._a = a;
    }

    get a(): number {
        return this._a;
    }
}

export class Vector2D<T> {
    private readonly _a: T;
    private readonly _b: T;

    constructor(a: T, b: T) {
        this._a = a;
        this._b = b;
    }

    get b(): T {
        return this._b;
    }

    get a(): T {
        return this._a;
    }
}
