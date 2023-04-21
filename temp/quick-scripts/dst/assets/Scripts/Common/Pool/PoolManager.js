
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Common/Pool/PoolManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcQ29tbW9uXFxQb29sXFxQb29sTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1Q0FBa0M7QUFDbEMsMENBQXFDO0FBQ3JDLDRDQUFxRDtBQUMvQyxJQUFBLGtCQUFxQyxFQUFuQyxvQkFBTyxFQUFFLHNCQUEwQixDQUFDO0FBRzVDO0lBREE7UUFHSSxTQUFJLEdBQWEsSUFBSSxDQUFDO1FBRWYsZUFBVSxHQUFlLHVCQUFVLENBQUMsRUFBRSxDQUFDO0lBQ2xELENBQUM7SUFIRztRQURDLFFBQVEsQ0FBQyxrQkFBUSxDQUFDO3dDQUNHO0lBRXRCO1FBREMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsdUJBQVUsQ0FBQyxFQUFFLENBQUM7OENBQ007SUFKckMsTUFBTTtRQURsQixPQUFPLENBQUMsUUFBUSxDQUFDO09BQ0wsTUFBTSxDQUtsQjtJQUFELGFBQUM7Q0FMRCxBQUtDLElBQUE7QUFMWSx3QkFBTTtBQU9uQjtJQURBO1FBR0ksU0FBSSxHQUFhLElBQUksQ0FBQztRQUVmLGFBQVEsR0FBYSxxQkFBUSxDQUFDLEVBQUUsQ0FBQztJQUM1QyxDQUFDO0lBSEc7UUFEQyxRQUFRLENBQUMsa0JBQVEsQ0FBQztzQ0FDRztJQUV0QjtRQURDLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLHFCQUFRLENBQUMsRUFBRSxDQUFDOzBDQUNFO0lBSi9CLElBQUk7UUFEaEIsT0FBTyxDQUFDLFFBQVEsQ0FBQztPQUNMLElBQUksQ0FLaEI7SUFBRCxXQUFDO0NBTEQsQUFLQyxJQUFBO0FBTFksb0JBQUk7QUFPakI7SUFBeUMsK0JBQXNCO0lBZTNEO1FBQUEsWUFDSSxpQkFBTyxTQUVWO1FBaEJELGlCQUFXLEdBQWEsRUFBRSxDQUFDO1FBRTNCLGVBQVMsR0FBVyxFQUFFLENBQUM7UUFFdkIsWUFBTSxHQUFhLElBQUksQ0FBQztRQUV4QixhQUFPLEdBQWEsSUFBSSxDQUFDO1FBRXpCLG9CQUFjLEdBQWEsSUFBSSxDQUFDO1FBRWhDLHFCQUFlLEdBQWEsSUFBSSxDQUFDO1FBRWpDLFVBQUksR0FBYSxJQUFJLENBQUM7UUFHbEIsYUFBVyxDQUFDLFNBQVMsR0FBRyxLQUFJLENBQUM7O0lBQ2pDLENBQUM7b0JBbEJnQixXQUFXO0lBbUI1QixtQ0FBYSxHQUFiLFVBQWMsSUFBZ0I7UUFDMUIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxFQUFFO1lBQzlDLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxFQUFFO2dCQUN4QyxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDM0Q7U0FDSjtJQUNMLENBQUM7SUFDRCxpQ0FBVyxHQUFYLFVBQVksSUFBYztRQUN0QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLEVBQUU7WUFDNUMsSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUU7Z0JBQ3BDLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUN6RDtTQUNKO0lBQ0wsQ0FBQztJQUNELG1DQUFhLEdBQWIsVUFBYyxJQUFnQixFQUFFLElBQWE7UUFDekMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQztZQUM1QyxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsRUFBRTtnQkFDeEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ2hEO0lBQ1QsQ0FBQzs7SUFwQ0Q7UUFEQyxRQUFRLENBQUMsTUFBTSxDQUFDO29EQUNVO0lBRTNCO1FBREMsUUFBUSxDQUFDLElBQUksQ0FBQztrREFDUTtJQUV2QjtRQURDLFFBQVEsQ0FBQyxrQkFBUSxDQUFDOytDQUNLO0lBRXhCO1FBREMsUUFBUSxDQUFDLGtCQUFRLENBQUM7Z0RBQ007SUFFekI7UUFEQyxRQUFRLENBQUMsa0JBQVEsQ0FBQzt1REFDYTtJQUVoQztRQURDLFFBQVEsQ0FBQyxrQkFBUSxDQUFDO3dEQUNjO0lBRWpDO1FBREMsUUFBUSxDQUFDLGtCQUFRLENBQUM7NkNBQ0c7SUFkTCxXQUFXO1FBRC9CLE9BQU87T0FDYSxXQUFXLENBdUMvQjtJQUFELGtCQUFDO0NBdkNELEFBdUNDLENBdkN3QyxtQkFBUyxHQXVDakQ7a0JBdkNvQixXQUFXIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJhc2VQb29sIGZyb20gXCIuL0Jhc2VQb29sXCI7XHJcbmltcG9ydCBTaW5nbGV0b24gZnJvbSBcIi4uL1NpbmdsZXRvblwiO1xyXG5pbXBvcnQgeyBCdWxsZXRUeXBlLCBTaGlwVHlwZSB9IGZyb20gXCIuLi9FbnVtRGVmaW5lXCI7XHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzcygnQnVsbGV0JylcclxuZXhwb3J0IGNsYXNzIEJ1bGxldCB7XHJcbiAgICBAcHJvcGVydHkoQmFzZVBvb2wpXHJcbiAgICBQb29sOiBCYXNlUG9vbCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5FbnVtKEJ1bGxldFR5cGUpIH0pXHJcbiAgICBwdWJsaWMgdHlwZUJ1bGxldDogQnVsbGV0VHlwZSA9IEJ1bGxldFR5cGUuQjU7XHJcbn1cclxuQGNjY2xhc3MoJ0RyYWdvbicpXHJcbmV4cG9ydCBjbGFzcyBTaGlwIHtcclxuICAgIEBwcm9wZXJ0eShCYXNlUG9vbClcclxuICAgIFBvb2w6IEJhc2VQb29sID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLkVudW0oU2hpcFR5cGUpIH0pXHJcbiAgICBwdWJsaWMgdHlwZXNoaXA6IFNoaXBUeXBlID0gU2hpcFR5cGUuUzE7XHJcbn1cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9vbE1hbmFnZXIgZXh0ZW5kcyBTaW5nbGV0b248UG9vbE1hbmFnZXI+IHtcclxuICAgIEBwcm9wZXJ0eShCdWxsZXQpXHJcbiAgICBhcnJheUJ1bGxldDogQnVsbGV0W10gPSBbXTtcclxuICAgIEBwcm9wZXJ0eShTaGlwKVxyXG4gICAgYXJyYXlTaGlwOiBTaGlwW10gPSBbXTtcclxuICAgIEBwcm9wZXJ0eShCYXNlUG9vbClcclxuICAgIGhpdFZGWDogQmFzZVBvb2wgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KEJhc2VQb29sKVxyXG4gICAgaGl0VkZYMjogQmFzZVBvb2wgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KEJhc2VQb29sKVxyXG4gICAgZW5lbXlFeHBsb3Npb246IEJhc2VQb29sID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShCYXNlUG9vbClcclxuICAgIGVuZW15RXhwbG9zaW9uMjogQmFzZVBvb2wgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KEJhc2VQb29sKVxyXG4gICAgQ29pbjogQmFzZVBvb2wgPSBudWxsO1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICBQb29sTWFuYWdlci5faW5zdGFuY2UgPSB0aGlzO1xyXG4gICAgfVxyXG4gICAgU3Bhd25lckJ1bGxldCh0eXBlOiBCdWxsZXRUeXBlKTogY2MuTm9kZSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmFycmF5QnVsbGV0Lmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlID09IHRoaXMuYXJyYXlCdWxsZXRbaV0udHlwZUJ1bGxldCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuYXJyYXlCdWxsZXRbaV0uUG9vbC5jcmVhdGVPYmplY3QodGhpcy5ub2RlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFNwYXduZXJTaGlwKHR5cGU6IFNoaXBUeXBlKTogY2MuTm9kZSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmFycmF5U2hpcC5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgICAgICBpZiAodHlwZSA9PSB0aGlzLmFycmF5U2hpcFtpXS50eXBlc2hpcCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuYXJyYXlTaGlwW2ldLlBvb2wuY3JlYXRlT2JqZWN0KHRoaXMubm9kZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBSZWN5Y2xlQnVsbGV0KHR5cGU6IEJ1bGxldFR5cGUsIG5vZGU6IGNjLk5vZGUpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYXJyYXlCdWxsZXQubGVuZ3RoOyArK2kpXHJcbiAgICAgICAgICAgIGlmICh0eXBlID09IHRoaXMuYXJyYXlCdWxsZXRbaV0udHlwZUJ1bGxldCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hcnJheUJ1bGxldFtpXS5Qb29sLlJlY3ljbGVPYmplY3Qobm9kZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=