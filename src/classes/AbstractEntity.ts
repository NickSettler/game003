import DrawableEntity from "../interfaces/DrawableEntity";
import UpdatableEntity from "../interfaces/UpdatableEntity";
import CollideEntity from "../interfaces/CollideEntity";

export default abstract class AbstractEntity implements DrawableEntity, UpdatableEntity, CollideEntity {
    abstract x1: number;
    abstract y1: number;
    abstract x2: number;
    abstract y2: number;

    abstract update(keys?: Map<string, boolean>): void;

    abstract draw(context: CanvasRenderingContext2D): void;

    abstract collides(entity: AbstractEntity): boolean;
    abstract collides(entity: AbstractEntity, callback: Function): boolean;

    abstract handleCollision(a: AbstractEntity, b: AbstractEntity): void;
}

