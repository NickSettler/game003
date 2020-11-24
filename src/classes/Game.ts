import AbstractEntity from "./AbstractEntity";
import {LocalStorageStateObject} from "../types";
import LocalStorage from "./webcore/LocalStorage";
import {EventEmitter} from "events";

export default class Game {
    private objects: Array<AbstractEntity> = [];

    public runUpdateProcess(keys: Map<string, boolean>): void {
        this.objects.map((object: AbstractEntity, i: number) => {
            object.update(keys);

            this.objects.forEach((tempObject: AbstractEntity, j: number) => {
                if (i !== j)
                    object.collides(tempObject, () => {
                        object.handleCollision(object, tempObject);
                    });
            });
        });
        // LocalStorage.saveGameState(this.getGameState());
    }

    public runRenderProcess(context: CanvasRenderingContext2D): void {
        context.clearRect(0, 0, context.canvas.width, context.canvas.height);

        this.objects.map((object: AbstractEntity) => object.draw(context));
    }

    public addEntity(object: AbstractEntity) {
        this.objects.push(object);
    }

    getGameState() {
        // return this.objects.reduce((state: Array<LocalStorageStateObject>, object: AbstractEntity) => {
        //     state.push(object.serialize());
        //     return state;
        // }, []);
    }
}
