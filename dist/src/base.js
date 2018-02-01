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
var Base = (function (_super) {
    __extends(Base, _super);
    function Base() {
        var _this = _super.call(this) || this;
        _this.base = new pixi_js_1.Sprite(pixi_js_1.loader.resources["assets/layer-22.png"].texture);
        _this.base.y = 475;
        _this.addChild(_this.base);
        return _this;
    }
    return Base;
}(Container));
exports.Base = Base;
//# sourceMappingURL=base.js.map