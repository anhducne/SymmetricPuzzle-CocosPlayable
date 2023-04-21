"use strict";
cc._RF.push(module, 'b197esH2m5ETZMvFV78q2ON', 'PoolManager');
// Scripts/Common/Pool/PoolManager.ts

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
var BasePool_1 = require("./BasePool");
var Singleton_1 = require("../Singleton");
var EnumDefine_1 = require("../EnumDefine");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Bullet = /** @class */ (function () {
    function Bullet() {
        this.Pool = null;
        this.typeBullet = EnumDefine_1.BulletType.B5;
    }
    __decorate([
        property(BasePool_1.default)
    ], Bullet.prototype, "Pool", void 0);
    __decorate([
        property({ type: cc.Enum(EnumDefine_1.BulletType) })
    ], Bullet.prototype, "typeBullet", void 0);
    Bullet = __decorate([
        ccclass('Bullet')
    ], Bullet);
    return Bullet;
}());
exports.Bullet = Bullet;
var Ship = /** @class */ (function () {
    function Ship() {
        this.Pool = null;
        this.typeship = EnumDefine_1.ShipType.S1;
    }
    __decorate([
        property(BasePool_1.default)
    ], Ship.prototype, "Pool", void 0);
    __decorate([
        property({ type: cc.Enum(EnumDefine_1.ShipType) })
    ], Ship.prototype, "typeship", void 0);
    Ship = __decorate([
        ccclass('Dragon')
    ], Ship);
    return Ship;
}());
exports.Ship = Ship;
var PoolManager = /** @class */ (function (_super) {
    __extends(PoolManager, _super);
    function PoolManager() {
        var _this = _super.call(this) || this;
        _this.arrayBullet = [];
        _this.arrayShip = [];
        _this.hitVFX = null;
        _this.hitVFX2 = null;
        _this.enemyExplosion = null;
        _this.enemyExplosion2 = null;
        _this.Coin = null;
        PoolManager_1._instance = _this;
        return _this;
    }
    PoolManager_1 = PoolManager;
    PoolManager.prototype.SpawnerBullet = function (type) {
        for (var i = 0; i < this.arrayBullet.length; ++i) {
            if (type == this.arrayBullet[i].typeBullet) {
                return this.arrayBullet[i].Pool.createObject(this.node);
            }
        }
    };
    PoolManager.prototype.SpawnerShip = function (type) {
        for (var i = 0; i < this.arrayShip.length; ++i) {
            if (type == this.arrayShip[i].typeship) {
                return this.arrayShip[i].Pool.createObject(this.node);
            }
        }
    };
    PoolManager.prototype.RecycleBullet = function (type, node) {
        for (var i = 0; i < this.arrayBullet.length; ++i)
            if (type == this.arrayBullet[i].typeBullet) {
                this.arrayBullet[i].Pool.RecycleObject(node);
            }
    };
    var PoolManager_1;
    __decorate([
        property(Bullet)
    ], PoolManager.prototype, "arrayBullet", void 0);
    __decorate([
        property(Ship)
    ], PoolManager.prototype, "arrayShip", void 0);
    __decorate([
        property(BasePool_1.default)
    ], PoolManager.prototype, "hitVFX", void 0);
    __decorate([
        property(BasePool_1.default)
    ], PoolManager.prototype, "hitVFX2", void 0);
    __decorate([
        property(BasePool_1.default)
    ], PoolManager.prototype, "enemyExplosion", void 0);
    __decorate([
        property(BasePool_1.default)
    ], PoolManager.prototype, "enemyExplosion2", void 0);
    __decorate([
        property(BasePool_1.default)
    ], PoolManager.prototype, "Coin", void 0);
    PoolManager = PoolManager_1 = __decorate([
        ccclass
    ], PoolManager);
    return PoolManager;
}(Singleton_1.default));
exports.default = PoolManager;

cc._RF.pop();