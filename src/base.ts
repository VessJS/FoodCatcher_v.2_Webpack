import Container = PIXI.Container;
import {Sprite, loader} from "pixi.js";

export class Base extends Container {
    private base = new Sprite(loader.resources["assets/layer-22.png"].texture);

    constructor() {
        super();
        this.base.y = 475;
        this.addChild(this.base);
    }
}
