import * as PIXI from "pixi.js";
import Application = PIXI.Application;
import {Knight} from "./knight";
import {Base} from "./base";
import {ShrimpsContainer} from "./shrimpsContainer";

const stageWidth: number = 512;
const stageHeight: number = 512;
const ticker = PIXI.ticker.shared;

let app = new Application({
        width: stageWidth,
        height: stageHeight,
        antialias: true,
        transparent: false,
        resolution: 1
    }
);

document.body.appendChild(app.view);

const KNIGHT_FRAME_LIST_LEFT = [
    "assets/knight_run left_0.png",
    "assets/knight_run left_1.png",
    "assets/knight_run left_2.png",
    "assets/knight_run left_3.png",
    "assets/knight_run left_4.png",
    "assets/knight_run left_5.png",
];
const FOOD = [
    "assets/Food.png"
];
const BASE = [
    "assets/layer-22.png"
];

PIXI.loader
    .add([
        KNIGHT_FRAME_LIST_LEFT,
        BASE,
        FOOD,
    ])
    .load(setup);

function setup() {

    const shrimp = new ShrimpsContainer();
    const knight = new Knight();


    app.stage.addChild(new Base(), knight, shrimp);

    knight.setBounds(stageWidth, stageHeight);

    ticker.add((time) => {
        let bounds = knight.getBounds();
        let collision: boolean = shrimp.contain(bounds);
        if (collision) {
        }
    });

    ticker.start();
}
