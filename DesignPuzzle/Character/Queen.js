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
exports.__esModule = true;
var Character_1 = require("./Character");
var KnifeBehavior_1 = require("../Weapon/KnifeBehavior");
var Queen = /** @class */ (function (_super) {
    __extends(Queen, _super);
    function Queen() {
        var _this = _super.call(this) || this;
        _this.weaponBehavior = new KnifeBehavior_1["default"]();
        return _this;
    }
    Queen.prototype.fight = function () {
        this.weaponBehavior.useWeapon();
    };
    return Queen;
}(Character_1["default"]));
exports["default"] = Queen;
