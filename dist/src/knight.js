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
var pixi_js_1 = require("pixi.js");
var EventEmitter = PIXI.utils.EventEmitter;
var Rectangle = PIXI.Rectangle;
var Knight = (function (_super) {
    __extends(Knight, _super);
    function Knight() {
        var _this = _super.call(this) || this;
        _this.knight = new pixi_js_1.Sprite(pixi_js_1.loader.resources["assets/knight_run left_0.png"].texture);
        _this.knight.x = 220;
        _this.knight.y = 400;
        _this.addChild(_this.knight);
        var widthKnight;
        var keyLeft = new Keyboard(37);
        keyLeft.on("klik", function () {
            if (_this.knight.x < _this.bounds.x + 20) {
                _this.knight.x = 20;
            }
            _this.knight.x -= 15;
            _this.knight.scale.x = 1;
        });
        var keyRight = new Keyboard(39);
        keyRight.on("klik", function () {
            widthKnight = _this.bounds.width - 20;
            if (_this.knight.x > widthKnight) {
                _this.knight.x = 490;
            }
            _this.knight.x += 15;
            _this.knight.scale.x = -1;
        });
        return _this;
    }
    Knight.prototype.setBounds = function (stageWidth, stageHeight) {
        this.bounds = new Rectangle(0, 0, stageWidth, stageHeight);
    };
    return Knight;
}(Container));
exports.Knight = Knight;
var Keyboard = (function (_super) {
    __extends(Keyboard, _super);
    function Keyboard(keyCode) {
        var _this = _super.call(this) || this;
        _this.code = keyCode;
        window.addEventListener("keydown", function (e) {
            _this.downHandler(e);
        });
        return _this;
    }
    ;
    Keyboard.prototype.downHandler = function (event) {
        if (event.keyCode === this.code) {
            this.emit("klik");
        }
    };
    Keyboard.prototype.upHandler = function (event) {
        if (event.keyCode === this.code) {
            this.emit("klik");
        }
    };
    return Keyboard;
}(EventEmitter));
exports.Keyboard = Keyboard;
//# sourceMappingURL=knight.js.map