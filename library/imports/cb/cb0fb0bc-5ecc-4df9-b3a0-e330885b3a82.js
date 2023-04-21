"use strict";
cc._RF.push(module, 'cb0fbC8XsxN+bOg4zCIWzqC', 'BasePool');
// Scripts/Common/Pool/BasePool.ts

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var BasePool = /** @class */ (function () {
    function BasePool() {
        this.Prefab = null;
        this.reuse = true;
        this.Size = 0;
        this.pool = new cc.NodePool();
        //Khong can biet chinh xac so luong nut ban dau ta se sinh ra cac nut neu bi thieu trong thoi gian chay
        for (var i = 0; i < this.Size; ++i) {
            var obj = cc.instantiate(this.Prefab); // create node instance
            this.pool.put(obj); // populate your pool with put method
        }
    }
    // createObject(prefab : cc.Prefab,parent: cc.Node): cc.Node{
    //     if(this.reuse && prefab == this.Prefab) {
    //         let obj = null;
    //         if (this.pool.size() > 0) {
    //             obj = this.pool.get();
    //         } else {
    //             obj = cc.instantiate(this.Prefab);
    //         }
    //         obj.parent = parent;
    //         return obj;    
    //     } else {
    //         let obj = cc.instantiate(this.Prefab);
    //         obj.parent = parent;
    //         return obj;
    //     }
    // }
    BasePool.prototype.createObject = function (parent) {
        if (this.reuse) {
            var obj = null;
            if (this.pool.size() > 0) {
                obj = this.pool.get();
                obj.active = true;
            }
            else {
                obj = cc.instantiate(this.Prefab);
            }
            obj.parent = parent;
            return obj;
        }
        else {
            var obj = cc.instantiate(this.Prefab);
            obj.parent = parent;
            return obj;
        }
    };
    // RecycleObject( prefab : cc.Prefab,obj: cc.Node) {
    //     if(this.reuse && prefab == this.Prefab) {
    //         this.pool.put(obj);
    //     } else {
    //         obj.destroy();
    //     }
    // }
    BasePool.prototype.RecycleObject = function (obj) {
        if (this.reuse) {
            obj.active = false;
            this.pool.put(obj);
        }
        else {
            obj.destroy();
        }
    };
    BasePool.prototype.clearPool = function () {
        this.pool.clear();
    };
    __decorate([
        property(cc.Prefab)
    ], BasePool.prototype, "Prefab", void 0);
    __decorate([
        property(cc.Boolean)
    ], BasePool.prototype, "reuse", void 0);
    __decorate([
        property(cc.Integer)
    ], BasePool.prototype, "Size", void 0);
    BasePool = __decorate([
        ccclass("BasePool")
    ], BasePool);
    return BasePool;
}());
exports.default = BasePool;

cc._RF.pop();