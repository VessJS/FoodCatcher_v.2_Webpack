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
var shrimp_1 = require("./shrimp");
var knight_1 = require("./knight");
var base_1 = require("./base");
var Shrimps = (function (_super) {
    __extends(Shrimps, _super);
    function Shrimps() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.numberOfShrimps = 5;
        _this.speed = 2;
        _this.direction = 1;
        _this.shrimps = [];
        return _this;
    }
    return Shrimps;
}(shrimp_1.Shrimp));
exports.Shrimps = Shrimps;
var Collision = (function (_super) {
    __extends(Collision, _super);
    function Collision(r1, r2) {
        var _this = _super.call(this) || this;
        _this.hit = false;
        _this.hitTestRectangle = function () {
            //Find the center points of each sprite
            r1.centerX = r1.x + r1.width / 2;
            r1.centerY = r1.y + r1.height / 2;
            r2.centerX = r2.x + r2.width / 2;
            r2.centerY = r2.y + r2.height / 2;
            //Find the half-widths and half-heights of each sprite
            r1.halfWidth = r1.width / 2;
            r1.halfHeight = r1.height / 2;
            r2.halfWidth = r2.width / 2;
            r2.halfHeight = r2.height / 2;
            //Calculate the distance vector between the sprites
            _this.vx = r1.centerX - r2.centerX;
            _this.vy = r1.centerY - r2.centerY;
            //Figure out the combined half-widths and half-heights
            _this.combinedHalfWidths = r1.halfWidth + r2.halfWidth;
            _this.combinedHalfHeights = r1.halfHeight + r2.halfHeight;
            //Check for a collision on the x axis
            if (Math.abs(_this.vx) < _this.combinedHalfWidths) {
                //A collision might be occuring. Check for a collision on the y axis
                if (Math.abs(_this.vy) < _this.combinedHalfHeights) {
                    //There's definitely a collision happening
                    _this.hit = true;
                }
                else {
                    //There's no collision on the y axis
                    _this.hit = false;
                }
            }
            else {
                //There's no collision on the x axis
                _this.hit = false;
            }
            //`hit` will be either `true` or `false`
            return _this.hit;
        };
        _this.randomInt = function (min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        };
        _this.shrimpCollision = function (shrimp) {
            shrimp.y += 3;
            var score = 0;
            if (_this.hitTestRectangle(Shrimps, knight_1.Knight)) {
                var x = _this.randomInt(0, _this.app.stage.width - shrimp.width);
                shrimp.x = x;
                shrimp.y = -90;
            }
            if (_this.hitTestRectangle(Shrimps, base_1.Base)) {
                var x = _this.randomInt(0, _this.app.stage.width - shrimp.width);
                shrimp.x = x;
                shrimp.y = -90;
                // baseHit = true;
            }
        };
        return _this;
    }
    return Collision;
}(shrimp_1.Shrimp));
exports.Collision = Collision;
//# sourceMappingURL=shrimps.js.map