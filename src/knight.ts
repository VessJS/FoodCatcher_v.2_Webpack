import Container = PIXI.Container;
import {Sprite, loader} from "pixi.js";
import EventEmitter = PIXI.utils.EventEmitter;
import Rectangle = PIXI.Rectangle;

export class Knight extends Container {
    public knight = new Sprite(loader.resources["assets/knight_run left_0.png"].texture);

    private bounds: Rectangle;

    constructor() {
        super();
        this.knight.x = 220;
        this.knight.y = 400;
        this.addChild(this.knight);
        let widthKnight;
        const keyLeft = new Keyboard(37);

        keyLeft.on("klik", () => {
            if (this.knight.x < this.bounds.x + 20) {
                this.knight.x = 20;
            }
            this.knight.x -= 15;
            this.knight.scale.x = 1;
        });

        const keyRight = new Keyboard(39);
        keyRight.on("klik", () => {
            widthKnight = this.bounds.width - 20;
            if (this.knight.x > widthKnight) {
                this.knight.x = 490;
            }
            this.knight.x += 15;
            this.knight.scale.x = -1;
        });
    }

    setBounds(stageWidth: number, stageHeight: number) {
        this.bounds = new Rectangle(0, 0, stageWidth, stageHeight)
    }
}

export class Keyboard extends EventEmitter {
    public code: number;

    constructor(keyCode: number) {
        super();
        this.code = keyCode;

        window.addEventListener("keydown", (e) => {
            this.downHandler(e);
        })
    };

    public downHandler(event) {
        if (event.keyCode === this.code) {
            this.emit("klik");
        }
    }

    public upHandler(event) {
        if (event.keyCode === this.code) {
            this.emit("klik");
        }
    }
}
