import Rectangle, {DefaultRectangleOptions, RectangleOptions} from "./Rectangle";
import AbstractEntity from "./AbstractEntity";
import ColorfulEntity from "../interfaces/ColorfulEntity";
import {LocalStorageStateObject} from "../types";
import {World} from "./consts";

export interface PlayerOptions extends RectangleOptions {
    ax: number;
    ay: number;
    vx: number;
    vy: number;
}

export const DefaultPlayerOptions: PlayerOptions = {
    ...DefaultRectangleOptions,
    ax: 0,
    ay: 0,
    vx: 0,
    vy: 0
}

export default class Player extends Rectangle implements PlayerOptions, AbstractEntity, ColorfulEntity {
    color: string = "#ff0000";
    ax: number;
    ay: number;
    vx: number;
    vy: number;

    constructor(options: PlayerOptions = DefaultPlayerOptions) {
        super(options);

        this.vx = options.vx;
        this.vy = options.vy;
        this.ax = options.ax;
        this.ay = options.ay;
    }

    public draw(context: CanvasRenderingContext2D) {
        context.fillStyle = this.color;
        super.draw(context);
    }

    collides(entity: AbstractEntity, callback: Function = () => {
    }): boolean {
        const collidesEntityLeft = this.x2 >= entity.x1;
        const collidesEntityTop = this.y2 >= entity.y1;
        const collidesEntityRight = this.x1 <= entity.x2;
        const collidesEntityBottom = this.y1 <= entity.y2;

        const collidesEntity = collidesEntityLeft && collidesEntityTop && collidesEntityRight && collidesEntityBottom;

        console.log(collidesEntity);

        if (collidesEntity) callback();

        return collidesEntity;
    }

    handleCollision(a: Player, b: AbstractEntity) {
        const aCenterX = (a.x2 - a.x1) / 2 + a.x1;
        const aCenterY = (a.y2 - a.y1) / 2 + a.y1;
        const bCenterX = (b.x2 - b.x1) / 2 + b.x1;
        const bCenterY = (b.y2 - b.y1) / 2 + b.y1;

        const deltaX = aCenterX - bCenterX;
        const deltaY = aCenterY - bCenterY;

        if(deltaX < 0) {
            a.ax = -a.ax;
            a.vx = -a.vx;
        }
    }

    update(keys: Map<string, boolean>): void {
        this.ax = 0
        this.ay = 0;

        if (keys.get("KeyW")) {
            this.ay -= 2;
        }
        if (keys.get("KeyS")) {
            this.ay += 2;
        }
        if (keys.get("KeyD")) {
            this.ax += 2;
        }
        if (keys.get("KeyA")) {
            this.ax -= 2;
        }

        this.vx += this.ax;
        this.vx *= World.FRICTION;

        this.vy += this.ay;
        this.vy *= World.FRICTION;

        this.y += this.vy;
        this.x += this.vx;
    }

    serialize(): LocalStorageStateObject {
        return {...this};
    }
}
