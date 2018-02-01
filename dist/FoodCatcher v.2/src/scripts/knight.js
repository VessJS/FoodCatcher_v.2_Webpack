"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Knight = (function () {
    function Knight(stage) {
        this.knight = new PIXI.Sprite(resources["../../src/knight_run left_0.png"].texture);
        stage.addChild(this.knight);
        this.knight.x = 220;
        this.knight.y = 400;
    }
    return Knight;
}());
exports.Knight = Knight;
//# sourceMappingURL=knight.js.map