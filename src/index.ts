import Player from "./classes/Player";
import Game from "./classes/Game";
import Wall from "./classes/Wall";

const canvas: HTMLCanvasElement = document.getElementById("canvas") as HTMLCanvasElement;
const context: CanvasRenderingContext2D = canvas.getContext('2d');

const width: number = canvas.width = 600;
const height: number = canvas.height = 400;

const player: Player = new Player();
player.color = "#ff00ff";

const borderWalls: Array<Wall> = [
    new Wall({
        x: -5, y: 0, w: 5, h: height
    }),
    new Wall({
        x: 0, y: -5, w: width, h: 5
    }),
    new Wall({
        x: width, y: 0, w: 5, h: height
    }),
    new Wall({
        x: 0, y: height, w: width, h: 5
    }),
]

const wall = new Wall({
    x: 100, y: 150, w: 30, h: 100
});
const wall1 = new Wall({
    x: 150, y: 150, w: 5, h: 100
});
wall.color = "#000000";

const game: Game = new Game();
borderWalls.forEach(borderWall => game.addEntity(borderWall));
game.addEntity(wall);
game.addEntity(wall1);
game.addEntity(player);

const keys: Map<string, boolean> = new Map<string, boolean>();

document.addEventListener("keydown", (ev: KeyboardEvent) => keys.set(ev.code, true));
document.addEventListener("keyup", (ev: KeyboardEvent) => keys.set(ev.code, false));

const update = (_delta?: number) => {
    game.runUpdateProcess(keys);
}

const render = () => {
    game.runRenderProcess(context);
}

let lastTimestamp: number = 0;

const main = (timestamp) => {
    const delta: number = timestamp - lastTimestamp;
    lastTimestamp = timestamp;

    update(delta);
    render();

    requestAnimationFrame(main);
}

requestAnimationFrame(main);
