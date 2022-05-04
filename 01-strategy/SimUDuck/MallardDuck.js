"use strict";
var __extends =
  (this && this.__extends) ||
  (function () {
    var extendStatics = function (d, b) {
      extendStatics =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (d, b) {
            d.__proto__ = b;
          }) ||
        function (d, b) {
          for (var p in b)
            if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
      return extendStatics(d, b);
    };
    return function (d, b) {
      if (typeof b !== "function" && b !== null)
        throw new TypeError(
          "Class extends value " + String(b) + " is not a constructor or null"
        );
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype =
        b === null
          ? Object.create(b)
          : ((__.prototype = b.prototype), new __());
    };
  })();
exports.__esModule = true;
exports.MallardDuck = void 0;
var FlyNoWay_1 = require("./algorithms/FlyNoWay");
var MuteQuack_1 = require("./algorithms/MuteQuack");
var Duck_1 = require("./Duck");
var MallardDuck = /** @class */ (function (_super) {
  __extends(MallardDuck, _super);
  function MallardDuck() {
    var _this = _super.call(this) || this;
    _this.flyBehavior = new FlyNoWay_1.FlyNoWay();
    _this.quackBehavior = new MuteQuack_1.MuteQuack();
    return _this;
  }
  MallardDuck.prototype.display = function () {
    console.log("looks like a Mallard Duck.");
  };
  return MallardDuck;
})(Duck_1.Duck);
exports.MallardDuck = MallardDuck;
