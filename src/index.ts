import Player from "./classes/Player";
import Game from "./classes/Game";
import Wall from "./classes/Wall";

const canvas: HTMLCanvasElement = document.getElementById("canvas") as HTMLCanvasElement;
const context: CanvasRenderingContext2D = canvas.getContext('2d');

const width: number = canvas.width = 600;
const height: number = canvas.height = 400;

const player: Player = new Player();
player.color = "#ff00ff";

const wall = new Wall({
    x: 100, y: 150, w: 30, h: 100
});
wall.color = "#000000";

const game: Game = new Game();
game.addEntity(wall);
game.addEntity(player);

const keys: Map<string, boolean> = new Map<string, boolean>();

document.addEventListener("keydown", (ev: KeyboardEvent) => keys.set(ev.code, true));
document.addEventListener("keyup", (ev: KeyboardEvent) => keys.set(ev.code, false));

const update = (delta?: number) => {
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
