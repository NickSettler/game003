import Rectangle from "./Rectangle";
import AbstractEntity from "./AbstractEntity";

export default class Wall extends Rectangle implements AbstractEntity {
    color: string;

    draw(context: CanvasRenderingContext2D) {
        context.fillStyle = this.color;
        super.draw(context);
    }

    collides(entity: AbstractEntity): boolean {
        return false;
    }

    update(keys?: Map<string, boolean>): void {
    }

    handleCollision(a: AbstractEntity, b: AbstractEntity): void {
    }
}
