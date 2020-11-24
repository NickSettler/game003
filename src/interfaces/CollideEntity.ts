import AbstractEntity from "../classes/AbstractEntity";

export default abstract class CollideEntity {
    abstract collides(entity: AbstractEntity): boolean;
    abstract collides(entity: AbstractEntity, callback: Function): boolean;

    abstract handleCollision(a: AbstractEntity, b: AbstractEntity): void;
}
