
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Common/PlatformBtn.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcQ29tbW9uXFxQbGF0Zm9ybUJ0bi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLGtCQUFtQyxFQUFsQyxvQkFBTyxFQUFFLHNCQUF5QixDQUFDO0FBRzFDO0lBQXlDLCtCQUFZO0lBRHJEO1FBQUEscUVBY0M7UUFYRyxvQkFBYyxHQUFtQixJQUFJLENBQUM7UUFFdEMsZ0JBQVUsR0FBbUIsSUFBSSxDQUFDOztJQVN0QyxDQUFDO0lBUkcsMkJBQUssR0FBTDtRQUVJLElBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxVQUFVO1lBQzdCLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDO2FBQzlELElBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxNQUFNO1lBQzlCLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ25FLENBQUM7SUFURDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDO3VEQUNhO0lBRXRDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7bURBQ1M7SUFKakIsV0FBVztRQUQvQixPQUFPO09BQ2EsV0FBVyxDQWEvQjtJQUFELGtCQUFDO0NBYkQsQUFhQyxDQWJ3QyxFQUFFLENBQUMsU0FBUyxHQWFwRDtrQkFib0IsV0FBVyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxhdGZvcm1CdG4gZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxyXG4gICAgYW5kcm9pZFNwcml0ZXM6IGNjLlNwcml0ZUZyYW1lID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSlcclxuICAgIGlvc1Nwcml0ZXM6IGNjLlNwcml0ZUZyYW1lID0gbnVsbDtcclxuICAgIHN0YXJ0KClcclxuICAgIHtcclxuICAgICAgICBpZihjYy5zeXMub3MgPT0gY2Muc3lzLk9TX0FORFJPSUQpXHJcbiAgICAgICAgICAgIHRoaXMuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLmFuZHJvaWRTcHJpdGVzO1xyXG4gICAgICAgIGVsc2UgaWYoY2Muc3lzLm9zID09IGNjLnN5cy5PU19JT1MpXHJcbiAgICAgICAgICAgIHRoaXMuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLmlvc1Nwcml0ZXM7XHJcbiAgICB9XHJcbiAgICBcclxufVxyXG4iXX0=