
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Controller/ObjectCongrat.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcQ29udHJvbGxlclxcT2JqZWN0Q29uZ3JhdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLGtCQUFxQyxFQUFuQyxvQkFBTyxFQUFFLHNCQUEwQixDQUFDO0FBRzVDO0lBQTJDLGlDQUFZO0lBRHZEO1FBQUEscUVBc0JDO1FBbkJHLFNBQUcsR0FBYyxJQUFJLENBQUM7UUFFdEIsa0JBQVksR0FBcUIsRUFBRSxDQUFDOztJQWlCeEMsQ0FBQztJQWhCRyw2QkFBSyxHQUFMLFVBQU0sS0FBYTtRQUFuQixpQkFlQztRQWRHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDM0IsSUFBSSxDQUFDLHNCQUFzQixFQUFFLENBQUM7UUFDOUIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDeEIsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztRQUN0QixJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNqQyxJQUFJLE9BQU8sR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzdCLElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDOUIsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDNUIsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUNkLEtBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2pDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNaLENBQUM7SUFsQkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzs4Q0FDRTtJQUV0QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDO3VEQUNXO0lBSm5CLGFBQWE7UUFEakMsT0FBTztPQUNhLGFBQWEsQ0FxQmpDO0lBQUQsb0JBQUM7Q0FyQkQsQUFxQkMsQ0FyQjBDLEVBQUUsQ0FBQyxTQUFTLEdBcUJ0RDtrQkFyQm9CLGFBQWEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT2JqZWN0Q29uZ3JhdCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlKVxyXG4gICAgaW1nOiBjYy5TcHJpdGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxyXG4gICAgYXJyYXlTcHJpdGVzOiBjYy5TcHJpdGVGcmFtZVtdID0gW107XHJcbiAgICBTZXRVcChzdGF0ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLnN0b3BBbGxBY3Rpb25zKCk7XHJcbiAgICAgICAgdGhpcy51bnNjaGVkdWxlQWxsQ2FsbGJhY2tzKCk7XHJcbiAgICAgICAgdGhpcy5pbWcuc3ByaXRlRnJhbWUgPSB0aGlzLmFycmF5U3ByaXRlc1tzdGF0ZV07XHJcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5ub2RlLnNjYWxlID0gMTtcclxuICAgICAgICB0aGlzLm5vZGUub3BhY2l0eSA9IDA7XHJcbiAgICAgICAgbGV0IGFjdGlvbiA9IGNjLnNjYWxlVG8oMC4wNSwgMSk7XHJcbiAgICAgICAgbGV0IGFjdGlvbjIgPSBjYy5mYWRlSW4oMC4yKTtcclxuICAgICAgICBsZXQgYWN0aW9uMyA9IGNjLmZhZGVPdXQoMC40KTtcclxuICAgICAgICB0aGlzLm5vZGUucnVuQWN0aW9uKGFjdGlvbik7XHJcbiAgICAgICAgdGhpcy5ub2RlLnJ1bkFjdGlvbihhY3Rpb24yKTtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5ydW5BY3Rpb24oYWN0aW9uMyk7XHJcbiAgICAgICAgfSwgMC40KTtcclxuICAgIH1cclxufVxyXG4iXX0=