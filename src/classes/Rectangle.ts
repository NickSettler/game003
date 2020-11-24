import Entity, {DefaultEntityOptions, EntityOptions} from "./Entity";
import DrawableEntity from "../interfaces/DrawableEntity";

export interface RectangleOptions extends EntityOptions {
    w: number;
    h: number;
}

export const DefaultRectangleOptions: RectangleOptions = {
    ...DefaultEntityOptions,
    w: 10,
    h: 10
}

export default class Rectangle extends Entity implements RectangleOptions, DrawableEntity {
    h: number;
    w: number;

    constructor(options: RectangleOptions = DefaultRectangleOptions) {
        super({...options});

        this.w = options.w;
        this.h = options.h;
    }

    public draw(context: CanvasRenderingContext2D) {
        context.beginPath();
        context.rect(this.x, this.y, this.w, this.h);
        context.fill();
        context.closePath();
    }

    get x1(): number {
        return this.x;
    }

    get y1(): number {
        return this.y;
    }

    get x2(): number {
        return this.x + this.w;
    }

    get y2(): number {
        return this.y + this.h;
    }
}
