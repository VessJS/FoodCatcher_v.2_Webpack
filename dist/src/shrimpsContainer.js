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
var pixi_js_1 = require("pixi.js");
var shrimp_1 = require("./shrimp");
var ShrimpsContainer = (function (_super) {
    __extends(ShrimpsContainer, _super);
    function ShrimpsContainer() {
        var _this = _super.call(this) || this;
        _this.numberOfShrimps = 5;
        _this.speed = 2;
        _this.direction = 1;
        _this.arrayOfShrimps = [];
        _this.ticker = PIXI.ticker.shared;
        _this.stage = new PIXI.Container();
        for (var i = 0; i < _this.numberOfShrimps; i++) {
            var fallingShrimp = new shrimp_1.Shrimp();
            fallingShrimp.vy = _this.speed * _this.direction;
            _this.resetShrimpPosition(fallingShrimp);
            _this.arrayOfShrimps.push(fallingShrimp);
            _this.addChild(fallingShrimp);
        }
        _this.ticker.add(function (time) {
            for (var k = 0; k < _this.numberOfShrimps; k++) {
                var fallingShrimp = _this.arrayOfShrimps[k];
                fallingShrimp.y += fallingShrimp.vy;
                if (fallingShrimp.y >= 460) {
                    fallingShrimp.y = _this.randomInt(-111, _this.stage.height);
                }
            }
        });
        _this.ticker.start();
        return _this;
    }
    ShrimpsContainer.prototype.contain = function (bounds) {
        var result = false;
        for (var i = 0; i < this.arrayOfShrimps.length; i++) {
            var fallingShrimp = this.arrayOfShrimps[i];
            if (this.hitTestRectangle(bounds, fallingShrimp.getBounds())) {
                result = true;
                this.resetShrimpPosition(fallingShrimp);
            }
        }
        return result;
    };
    ShrimpsContainer.prototype.resetShrimpPosition = function (shrimp) {
        shrimp.x = this.randomInt(0, this.stage.width + 512);
        shrimp.y = this.randomInt(-550, this.stage.height);
    };
    ShrimpsContainer.prototype.randomInt = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    ShrimpsContainer.prototype.hitTestRectangle = function (r1, r2) {
        var hit;
        var combinedHalfWidths;
        var combinedHalfHeights;
        var vx;
        var vy;
        hit = false;
        r1.centerX = r1.x + r1.width / 2;
        r1.centerY = r1.y + r1.height / 2;
        r2.centerX = r2.x + r2.width / 2;
        r2.centerY = r2.y + r2.height / 2;
        r1.halfWidth = r1.width / 2;
        r1.halfHeight = r1.height / 2;
        r2.halfWidth = r2.width / 2;
        r2.halfHeight = r2.height / 2;
        vx = r1.centerX - r2.centerX;
        vy = r1.centerY - r2.centerY;
        combinedHalfWidths = r1.halfWidth + r2.halfWidth;
        combinedHalfHeights = r1.halfHeight + r2.halfHeight;
        if (Math.abs(vx) < combinedHalfWidths) {
            if (Math.abs(vy) < combinedHalfHeights) {
                hit = true;
            }
            else {
                hit = false;
            }
        }
        else {
            hit = false;
        }
        return hit;
    };
    ;
    return ShrimpsContainer;
}(pixi_js_1.Container));
exports.ShrimpsContainer = ShrimpsContainer;
//# sourceMappingURL=shrimpsContainer.js.map