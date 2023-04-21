
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Common/Base/GlobalGamePlay.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'dd87cExEyBFWYnLOVXgRudY', 'GlobalGamePlay');
// Scripts/Common/Base/GlobalGamePlay.ts

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
var GameManager2_1 = require("../../Manager/GameManager2");
var Singleton_1 = require("../Singleton");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
exports.eventDispatcher = new cc.EventTarget();
var GlobalGamePlay = /** @class */ (function (_super) {
    __extends(GlobalGamePlay, _super);
    function GlobalGamePlay() {
        var _this = _super.call(this) || this;
        _this.gameplay = GameManager2_1.default.Instance(GameManager2_1.default);
        GlobalGamePlay_1._instance = _this;
        return _this;
    }
    GlobalGamePlay_1 = GlobalGamePlay;
    var GlobalGamePlay_1;
    GlobalGamePlay = GlobalGamePlay_1 = __decorate([
        ccclass
    ], GlobalGamePlay);
    return GlobalGamePlay;
}(Singleton_1.default));
exports.default = GlobalGamePlay;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcQ29tbW9uXFxCYXNlXFxHbG9iYWxHYW1lUGxheS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyREFBc0Q7QUFDdEQsMENBQXFDO0FBRS9CLElBQUEsa0JBQXFDLEVBQW5DLG9CQUFPLEVBQUUsc0JBQTBCLENBQUM7QUFDL0IsUUFBQSxlQUFlLEdBQUcsSUFBSSxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUM7QUFFcEQ7SUFBNEMsa0NBQXlCO0lBRWpFO1FBQUEsWUFDSSxpQkFBTyxTQUVWO1FBSkQsY0FBUSxHQUFpQixzQkFBWSxDQUFDLFFBQVEsQ0FBQyxzQkFBWSxDQUFDLENBQUM7UUFHekQsZ0JBQWMsQ0FBQyxTQUFTLEdBQUcsS0FBSSxDQUFDOztJQUNwQyxDQUFDO3VCQUxnQixjQUFjOztJQUFkLGNBQWM7UUFEbEMsT0FBTztPQUNhLGNBQWMsQ0FNbEM7SUFBRCxxQkFBQztDQU5ELEFBTUMsQ0FOMkMsbUJBQVMsR0FNcEQ7a0JBTm9CLGNBQWMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR2FtZU1hbmFnZXIyIGZyb20gXCIuLi8uLi9NYW5hZ2VyL0dhbWVNYW5hZ2VyMlwiO1xyXG5pbXBvcnQgU2luZ2xldG9uIGZyb20gXCIuLi9TaW5nbGV0b25cIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcbmV4cG9ydCBjb25zdCBldmVudERpc3BhdGNoZXIgPSBuZXcgY2MuRXZlbnRUYXJnZXQoKTtcclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2xvYmFsR2FtZVBsYXkgZXh0ZW5kcyBTaW5nbGV0b248R2xvYmFsR2FtZVBsYXk+IHtcclxuICAgIGdhbWVwbGF5OiBHYW1lTWFuYWdlcjIgPSBHYW1lTWFuYWdlcjIuSW5zdGFuY2UoR2FtZU1hbmFnZXIyKTtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgR2xvYmFsR2FtZVBsYXkuX2luc3RhbmNlID0gdGhpcztcclxuICAgIH1cclxufSJdfQ==