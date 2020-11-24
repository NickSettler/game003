export interface EntityOptions {
    x: number;
    y: number;
}

export const DefaultEntityOptions: EntityOptions = {
    x: 40,
    y: 40,
}

export default class Entity implements EntityOptions {
    x: number;
    y: number;

    constructor(options: EntityOptions = DefaultEntityOptions) {
        this.x = options.x;
        this.y = options.y;
    }
}
