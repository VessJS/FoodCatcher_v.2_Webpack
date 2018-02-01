"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Container = PIXI.Container;
var Sprite = PIXI.Sprite;
var Rectangle = PIXI.Rectangle;
var Shrimp = (function (_super) {
    __extends(Shrimp, _super);
    function Shrimp() {
        var _this = _super.call(this) || this;
        _this.vy = 1;
        var rectangle = new Rectangle(111, 111, 16, 16);
        var shrimp = new Sprite(PIXI.utils.TextureCache["assets/Food.png"]);
        shrimp.texture.frame = rectangle;
        shrimp.x = 0;
        shrimp.y = 0;
        _this.addChild(shrimp);
        return _this;
    }
    return Shrimp;
}(Container));
exports.Shrimp = Shrimp;
//# sourceMappingURL=shrimp.js.map