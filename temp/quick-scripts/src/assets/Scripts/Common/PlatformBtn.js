"use strict";
cc._RF.push(module, 'd1c651xp4JB+px11ml/9gni', 'PlatformBtn');
// Scripts/Common/PlatformBtn.ts

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
var PlatformBtn = /** @class */ (function (_super) {
    __extends(PlatformBtn, _super);
    function PlatformBtn() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.androidSprites = null;
        _this.iosSprites = null;
        return _this;
    }
    PlatformBtn.prototype.start = function () {
        if (cc.sys.os == cc.sys.OS_ANDROID)
            this.getComponent(cc.Sprite).spriteFrame = this.androidSprites;
        else if (cc.sys.os == cc.sys.OS_IOS)
            this.getComponent(cc.Sprite).spriteFrame = this.iosSprites;
    };
    __decorate([
        property(cc.SpriteFrame)
    ], PlatformBtn.prototype, "androidSprites", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], PlatformBtn.prototype, "iosSprites", void 0);
    PlatformBtn = __decorate([
        ccclass
    ], PlatformBtn);
    return PlatformBtn;
}(cc.Component));
exports.default = PlatformBtn;

cc._RF.pop();