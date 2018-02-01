"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PIXI = require("pixi.js");
var Application = PIXI.Application;
var knight_1 = require("./knight");
// document.body.innerHTML = `<p>Hi there. Current date is ${new Date()}.</p>`;
// console.log('hello console');
// let app: Application;
var app = new Application({
    width: 512,
    height: 512,
    antialias: true,
    transparent: false,
    resolution: 1
});
PIXI.loader
    .add("../assets/knight_run left_0.png")
    .load(knight_1.Knight);
function setup() {
}
app.stage.addChild(knight_1.Knight);
document.body.appendChild(app.view);
//# sourceMappingURL=app.js.map