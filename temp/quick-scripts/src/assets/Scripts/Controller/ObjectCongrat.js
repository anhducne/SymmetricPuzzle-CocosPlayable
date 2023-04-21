"use strict";
cc._RF.push(module, 'b2f14XvrkJHc71E+J1nOeE3', 'ObjectCongrat');
// Scripts/Controller/ObjectCongrat.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ObjectCongrat = /** @class */ (function (_super) {
    __extends(ObjectCongrat, _super);
    function ObjectCongrat() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.img = null;
        _this.arraySprites = [];
        return _this;
    }
    ObjectCongrat.prototype.SetUp = function (state) {
        var _this = this;
        this.node.stopAllActions();
        this.unscheduleAllCallbacks();
        this.img.spriteFrame = this.arraySprites[state];
        this.node.active = true;
        this.node.scale = 1;
        this.node.opacity = 0;
        var action = cc.scaleTo(0.05, 1);
        var action2 = cc.fadeIn(0.2);
        var action3 = cc.fadeOut(0.4);
        this.node.runAction(action);
        this.node.runAction(action2);
        this.scheduleOnce(function () {
            _this.node.runAction(action3);
        }, 0.4);
    };
    __decorate([
        property(cc.Sprite)
    ], ObjectCongrat.prototype, "img", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], ObjectCongrat.prototype, "arraySprites", void 0);
    ObjectCongrat = __decorate([
        ccclass
    ], ObjectCongrat);
    return ObjectCongrat;
}(cc.Component));
exports.default = ObjectCongrat;

cc._RF.pop();