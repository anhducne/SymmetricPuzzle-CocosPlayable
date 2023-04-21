"use strict";
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