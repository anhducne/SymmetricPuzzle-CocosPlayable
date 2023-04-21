"use strict";
cc._RF.push(module, '50eb6cZwRxNLpK8cBvybOe6', 'DestroyVFX');
// Scripts/Common/DestroyVFX.ts

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
var DestroyVFX = /** @class */ (function (_super) {
    __extends(DestroyVFX, _super);
    function DestroyVFX() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.timming = 0.3;
        return _this;
    }
    DestroyVFX.prototype.start = function () {
        var _this = this;
        this.scheduleOnce(function () {
            _this.node.destroy();
        }, this.timming);
    };
    __decorate([
        property(cc.Float)
    ], DestroyVFX.prototype, "timming", void 0);
    DestroyVFX = __decorate([
        ccclass
    ], DestroyVFX);
    return DestroyVFX;
}(cc.Component));
exports.default = DestroyVFX;

cc._RF.pop();