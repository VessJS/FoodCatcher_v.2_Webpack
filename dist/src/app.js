"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PIXI = require("pixi.js");
var Application = PIXI.Application;
var knight_1 = require("./knight");
var base_1 = require("./base");
var shrimpsContainer_1 = require("./shrimpsContainer");
var stageWidth = 512;
var stageHeight = 512;
var ticker = PIXI.ticker.shared;
var app = new Application({
    width: stageWidth,
    height: stageHeight,
    antialias: true,
    transparent: false,
    resolution: 1
});
document.body.appendChild(app.view);
var KNIGHT_FRAME_LIST_LEFT = [
    "assets/knight_run left_0.png",
    "assets/knight_run left_1.png",
    "assets/knight_run left_2.png",
    "assets/knight_run left_3.png",
    "assets/knight_run left_4.png",
    "assets/knight_run left_5.png",
];
var FOOD = [
    "assets/Food.png"
];
var BASE = [
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
    var shrimp = new shrimpsContainer_1.ShrimpsContainer();
    var knight = new knight_1.Knight();
    app.stage.addChild(new base_1.Base(), knight, shrimp);
    knight.setBounds(stageWidth, stageHeight);
    ticker.add(function (time) {
        var bounds = knight.getBounds();
        var collision = shrimp.contain(bounds);
        if (collision) {
        }
    });
    ticker.start();
}
//# sourceMappingURL=app.js.map