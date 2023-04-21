
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Common/Pool/BasePool.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcQ29tbW9uXFxQb29sXFxCYXNlUG9vbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsa0JBQW1DLEVBQWxDLG9CQUFPLEVBQUUsc0JBQXlCLENBQUM7QUFHMUM7SUFZSTtRQVBBLFdBQU0sR0FBYyxJQUFJLENBQUM7UUFHbEIsVUFBSyxHQUFZLElBQUksQ0FBQztRQUV0QixTQUFJLEdBQVcsQ0FBQyxDQUFDO1FBR3BCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDOUIsdUdBQXVHO1FBQ3ZHLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxFQUFFO1lBQ2hDLElBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsdUJBQXVCO1lBQzlELElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMscUNBQXFDO1NBQzVEO0lBQ0wsQ0FBQztJQUVELDZEQUE2RDtJQUM3RCxnREFBZ0Q7SUFDaEQsMEJBQTBCO0lBQzFCLHNDQUFzQztJQUN0QyxxQ0FBcUM7SUFDckMsbUJBQW1CO0lBQ25CLGlEQUFpRDtJQUNqRCxZQUFZO0lBQ1osK0JBQStCO0lBQy9CLDBCQUEwQjtJQUMxQixlQUFlO0lBQ2YsaURBQWlEO0lBQ2pELCtCQUErQjtJQUMvQixzQkFBc0I7SUFDdEIsUUFBUTtJQUNSLElBQUk7SUFDSCwrQkFBWSxHQUFaLFVBQWEsTUFBZTtRQUN6QixJQUFHLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDWCxJQUFJLEdBQUcsR0FBYSxJQUFJLENBQUM7WUFDekIsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsRUFBRTtnQkFDdEIsR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7Z0JBQ3RCLEdBQUcsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO2FBQ3JCO2lCQUFNO2dCQUNILEdBQUcsR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUNyQztZQUNELEdBQUcsQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1lBQ3BCLE9BQU8sR0FBRyxDQUFDO1NBQ2Q7YUFBTTtZQUNILElBQUksR0FBRyxHQUFhLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ2hELEdBQUcsQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1lBQ3BCLE9BQU8sR0FBRyxDQUFDO1NBQ2Q7SUFDTCxDQUFDO0lBQ0Qsb0RBQW9EO0lBQ3BELGdEQUFnRDtJQUNoRCw4QkFBOEI7SUFDOUIsZUFBZTtJQUNmLHlCQUF5QjtJQUN6QixRQUFRO0lBQ1IsSUFBSTtJQUNKLGdDQUFhLEdBQWIsVUFBYyxHQUFZO1FBQ3RCLElBQUcsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNYLEdBQUcsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQ25CLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ3RCO2FBQU07WUFDSCxHQUFHLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDakI7SUFDTCxDQUFDO0lBRUQsNEJBQVMsR0FBVDtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQW5FRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzRDQUNLO0lBR3pCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUM7MkNBQ1E7SUFFN0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQzswQ0FDRztJQVZQLFFBQVE7UUFENUIsT0FBTyxDQUFDLFVBQVUsQ0FBQztPQUNDLFFBQVEsQ0EwRTVCO0lBQUQsZUFBQztDQTFFRCxBQTBFQyxJQUFBO2tCQTFFb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3MoXCJCYXNlUG9vbFwiKVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYXNlUG9vbCB7XHJcblxyXG4gICAgcHJpdmF0ZSBwb29sOiBjYy5Ob2RlUG9vbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgUHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Cb29sZWFuKVxyXG4gICAgcHVibGljIHJldXNlOiBib29sZWFuID0gdHJ1ZTtcclxuICAgIEBwcm9wZXJ0eShjYy5JbnRlZ2VyKVxyXG4gICAgcHVibGljIFNpemU6IG51bWJlciA9IDA7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5wb29sID0gbmV3IGNjLk5vZGVQb29sKCk7XHJcbiAgICAgICAgLy9LaG9uZyBjYW4gYmlldCBjaGluaCB4YWMgc28gbHVvbmcgbnV0IGJhbiBkYXUgdGEgc2Ugc2luaCByYSBjYWMgbnV0IG5ldSBiaSB0aGlldSB0cm9uZyB0aG9pIGdpYW4gY2hheVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5TaXplOyArK2kpIHtcclxuICAgICAgICAgICAgbGV0IG9iaiA9IGNjLmluc3RhbnRpYXRlKHRoaXMuUHJlZmFiKTsgLy8gY3JlYXRlIG5vZGUgaW5zdGFuY2VcclxuICAgICAgICAgICAgdGhpcy5wb29sLnB1dChvYmopOyAvLyBwb3B1bGF0ZSB5b3VyIHBvb2wgd2l0aCBwdXQgbWV0aG9kXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIGNyZWF0ZU9iamVjdChwcmVmYWIgOiBjYy5QcmVmYWIscGFyZW50OiBjYy5Ob2RlKTogY2MuTm9kZXtcclxuICAgIC8vICAgICBpZih0aGlzLnJldXNlICYmIHByZWZhYiA9PSB0aGlzLlByZWZhYikge1xyXG4gICAgLy8gICAgICAgICBsZXQgb2JqID0gbnVsbDtcclxuICAgIC8vICAgICAgICAgaWYgKHRoaXMucG9vbC5zaXplKCkgPiAwKSB7XHJcbiAgICAvLyAgICAgICAgICAgICBvYmogPSB0aGlzLnBvb2wuZ2V0KCk7XHJcbiAgICAvLyAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAvLyAgICAgICAgICAgICBvYmogPSBjYy5pbnN0YW50aWF0ZSh0aGlzLlByZWZhYik7XHJcbiAgICAvLyAgICAgICAgIH1cclxuICAgIC8vICAgICAgICAgb2JqLnBhcmVudCA9IHBhcmVudDtcclxuICAgIC8vICAgICAgICAgcmV0dXJuIG9iajsgICAgXHJcbiAgICAvLyAgICAgfSBlbHNlIHtcclxuICAgIC8vICAgICAgICAgbGV0IG9iaiA9IGNjLmluc3RhbnRpYXRlKHRoaXMuUHJlZmFiKTtcclxuICAgIC8vICAgICAgICAgb2JqLnBhcmVudCA9IHBhcmVudDtcclxuICAgIC8vICAgICAgICAgcmV0dXJuIG9iajtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyB9XHJcbiAgICAgY3JlYXRlT2JqZWN0KHBhcmVudDogY2MuTm9kZSk6IGNjLk5vZGV7XHJcbiAgICAgICAgaWYodGhpcy5yZXVzZSkge1xyXG4gICAgICAgICAgICBsZXQgb2JqIDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnBvb2wuc2l6ZSgpID4gMCkgeyAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgb2JqID0gdGhpcy5wb29sLmdldCgpO1xyXG4gICAgICAgICAgICAgICAgb2JqLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBvYmogPSBjYy5pbnN0YW50aWF0ZSh0aGlzLlByZWZhYik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb2JqLnBhcmVudCA9IHBhcmVudDtcclxuICAgICAgICAgICAgcmV0dXJuIG9iajsgICAgXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbGV0IG9iaiA6IGNjLk5vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLlByZWZhYik7XHJcbiAgICAgICAgICAgIG9iai5wYXJlbnQgPSBwYXJlbnQ7XHJcbiAgICAgICAgICAgIHJldHVybiBvYmo7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gUmVjeWNsZU9iamVjdCggcHJlZmFiIDogY2MuUHJlZmFiLG9iajogY2MuTm9kZSkge1xyXG4gICAgLy8gICAgIGlmKHRoaXMucmV1c2UgJiYgcHJlZmFiID09IHRoaXMuUHJlZmFiKSB7XHJcbiAgICAvLyAgICAgICAgIHRoaXMucG9vbC5wdXQob2JqKTtcclxuICAgIC8vICAgICB9IGVsc2Uge1xyXG4gICAgLy8gICAgICAgICBvYmouZGVzdHJveSgpO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH1cclxuICAgIFJlY3ljbGVPYmplY3Qob2JqOiBjYy5Ob2RlKSB7XHJcbiAgICAgICAgaWYodGhpcy5yZXVzZSkge1xyXG4gICAgICAgICAgICBvYmouYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMucG9vbC5wdXQob2JqKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBvYmouZGVzdHJveSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjbGVhclBvb2woKXtcclxuICAgICAgICB0aGlzLnBvb2wuY2xlYXIoKTtcclxuICAgIH1cclxuICAgIFxyXG59Il19