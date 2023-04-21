
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Controller/ObjectMove.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3cd7acL2HVPBLnWtaMLj7MI', 'ObjectMove');
// Scripts/Controller/ObjectMove.ts

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
var GlobalGamePlay_1 = require("../Common/Base/GlobalGamePlay");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ObjectMove = /** @class */ (function (_super) {
    __extends(ObjectMove, _super);
    function ObjectMove() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.boxCollider = null;
        _this.speedInit = 0;
        _this.img = null;
        _this.trail = null;
        _this.arraySprites = [];
        _this.arraySpritesHurtNotes = [];
        _this.effectPref = [];
        _this.isActive = false;
        _this.isHit = false;
        _this.isBonusScore = false;
        _this.currentSpeed = 0;
        _this.y = 0;
        _this.time = 0;
        _this.type = 0;
        _this.transformCollision = null;
        return _this;
    }
    ObjectMove.prototype.SetActive = function (type, scale, speed, isHit) {
        this.type = type;
        this.isHit = isHit;
        this.isBonusScore = (scale != 0 && this.isHit);
        if (isHit) {
            this.boxCollider.enabled = true;
            this.img.spriteFrame = this.arraySprites[type];
            this.trail.scaleX = 1;
            this.trail.scaleY = scale;
            this.y = -306 - (100 * scale);
        }
        else {
            this.boxCollider.enabled = false;
            this.img.spriteFrame = this.arraySpritesHurtNotes[type];
            //this.img = null;
            this.trail.scale = 0;
        }
        this.currentSpeed = this.speedInit * speed;
        this.isActive = true;
    };
    ObjectMove.prototype.update = function (dt) {
        this.node.y += this.currentSpeed * dt;
        if (this.node.y < -306 && this.isActive) {
            if (!this.isHit) {
                this.isActive = false;
                this.node.destroy();
                GlobalGamePlay_1.default.Instance(GlobalGamePlay_1.default).gameplay.EnemyAnimation(this.type);
            }
            else {
                if (this.node.y < -410) {
                    this.isActive = false;
                    this.isBonusScore = false;
                    GlobalGamePlay_1.default.Instance(GlobalGamePlay_1.default).gameplay.OnMiss();
                    this.node.destroy();
                }
            }
        }
        if (this.isBonusScore && !this.isActive) {
            if (this.transformCollision.x > this.node.x + 30 || this.transformCollision.x < this.node.x - 30 || this.node.y < this.y) {
                this.isBonusScore = false;
                this.node.destroy();
                //Stop sound gun auto
            }
            else {
                this.time += dt;
                //Play sound gun auto
                if (this.time > 0.1) {
                    this.time = 0;
                    GlobalGamePlay_1.default.Instance(GlobalGamePlay_1.default).gameplay.OnAddScore(30);
                }
            }
        }
    };
    ObjectMove.prototype.onCollisionEnter = function (Other, mySelf) {
        if (this.isActive) {
            this.isActive = false;
            if (Other.node.group == "ObjectTarget") {
                GlobalGamePlay_1.default.Instance(GlobalGamePlay_1.default).gameplay.PlayerAnimation(this.type);
                if (this.node.y < Other.node.y) {
                    GlobalGamePlay_1.default.Instance(GlobalGamePlay_1.default).gameplay.OnAddScore(250);
                }
                else {
                    GlobalGamePlay_1.default.Instance(GlobalGamePlay_1.default).gameplay.OnAddScore(500);
                }
                //if (!this.isBonusScore) {
                //this.scheduleOnce(() => {
                this.node.destroy();
                //}, 0.1);
                //}
                //Play Sound Gun DE
                // cc.audioEngine.playEffect(GlobalGamePlay.Instance(GlobalGamePlay).gameplay.soundManager.soundDE, false);
                this.SpawnerEffectObject(this.type, mySelf.node);
            }
        }
    };
    ObjectMove.prototype.SpawnerEffectObject = function (type, pos) {
        var eff = cc.instantiate(this.effectPref[type]);
        eff.setParent(GlobalGamePlay_1.default.Instance(GlobalGamePlay_1.default).gameplay.effectParent);
        eff.setPosition(pos.x, pos.y - 20);
    };
    __decorate([
        property(cc.BoxCollider)
    ], ObjectMove.prototype, "boxCollider", void 0);
    __decorate([
        property(cc.Float)
    ], ObjectMove.prototype, "speedInit", void 0);
    __decorate([
        property(cc.Sprite)
    ], ObjectMove.prototype, "img", void 0);
    __decorate([
        property(cc.Node)
    ], ObjectMove.prototype, "trail", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], ObjectMove.prototype, "arraySprites", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], ObjectMove.prototype, "arraySpritesHurtNotes", void 0);
    __decorate([
        property(cc.Prefab)
    ], ObjectMove.prototype, "effectPref", void 0);
    ObjectMove = __decorate([
        ccclass
    ], ObjectMove);
    return ObjectMove;
}(cc.Component));
exports.default = ObjectMove;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcQ29udHJvbGxlclxcT2JqZWN0TW92ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnRUFBMkQ7QUFFckQsSUFBQSxrQkFBcUMsRUFBbkMsb0JBQU8sRUFBRSxzQkFBMEIsQ0FBQztBQUc1QztJQUF3Qyw4QkFBWTtJQURwRDtRQUFBLHFFQTRHQztRQXpHRyxpQkFBVyxHQUFtQixJQUFJLENBQUM7UUFFbkMsZUFBUyxHQUFXLENBQUMsQ0FBQztRQUV0QixTQUFHLEdBQWMsSUFBSSxDQUFDO1FBRXRCLFdBQUssR0FBWSxJQUFJLENBQUM7UUFFdEIsa0JBQVksR0FBcUIsRUFBRSxDQUFDO1FBRXBDLDJCQUFxQixHQUFxQixFQUFFLENBQUM7UUFFN0MsZ0JBQVUsR0FBZ0IsRUFBRSxDQUFDO1FBQzdCLGNBQVEsR0FBWSxLQUFLLENBQUM7UUFDMUIsV0FBSyxHQUFZLEtBQUssQ0FBQztRQUN2QixrQkFBWSxHQUFZLEtBQUssQ0FBQztRQUM5QixrQkFBWSxHQUFXLENBQUMsQ0FBQztRQUN6QixPQUFDLEdBQVcsQ0FBQyxDQUFDO1FBQ2QsVUFBSSxHQUFXLENBQUMsQ0FBQztRQUNqQixVQUFJLEdBQVcsQ0FBQyxDQUFDO1FBQ2pCLHdCQUFrQixHQUFZLElBQUksQ0FBQzs7SUFxRnZDLENBQUM7SUFwRkcsOEJBQVMsR0FBVCxVQUFVLElBQVksRUFBRSxLQUFhLEVBQUUsS0FBYSxFQUFFLEtBQWM7UUFDaEUsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLEtBQUssSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQy9DLElBQUksS0FBSyxFQUFFO1lBQ1AsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEdBQUcs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UUFDN0UsR0FBRyxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQXhHRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDO21EQUNVO0lBRW5DO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7aURBQ0c7SUFFdEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzsyQ0FDRTtJQUV0QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzZDQUNJO0lBRXRCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7b0RBQ1c7SUFFcEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQzs2REFDb0I7SUFFN0M7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztrREFDUztJQWRaLFVBQVU7UUFEOUIsT0FBTztPQUNhLFVBQVUsQ0EyRzlCO0lBQUQsaUJBQUM7Q0EzR0QsQUEyR0MsQ0EzR3VDLEVBQUUsQ0FBQyxTQUFTLEdBMkduRDtrQkEzR29CLFVBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR2xvYmFsR2FtZVBsYXkgZnJvbSBcIi4uL0NvbW1vbi9CYXNlL0dsb2JhbEdhbWVQbGF5XCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT2JqZWN0TW92ZSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkoY2MuQm94Q29sbGlkZXIpXHJcbiAgICBib3hDb2xsaWRlcjogY2MuQm94Q29sbGlkZXIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkZsb2F0KVxyXG4gICAgc3BlZWRJbml0OiBudW1iZXIgPSAwO1xyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcclxuICAgIGltZzogY2MuU3ByaXRlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgdHJhaWw6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxyXG4gICAgYXJyYXlTcHJpdGVzOiBjYy5TcHJpdGVGcmFtZVtdID0gW107XHJcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXHJcbiAgICBhcnJheVNwcml0ZXNIdXJ0Tm90ZXM6IGNjLlNwcml0ZUZyYW1lW10gPSBbXTtcclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBlZmZlY3RQcmVmOiBjYy5QcmVmYWJbXSA9IFtdO1xyXG4gICAgaXNBY3RpdmU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIGlzSGl0OiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBpc0JvbnVzU2NvcmU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIGN1cnJlbnRTcGVlZDogbnVtYmVyID0gMDtcclxuICAgIHk6IG51bWJlciA9IDA7XHJcbiAgICB0aW1lOiBudW1iZXIgPSAwO1xyXG4gICAgdHlwZTogbnVtYmVyID0gMDtcclxuICAgIHRyYW5zZm9ybUNvbGxpc2lvbjogY2MuVmVjMiA9IG51bGw7XHJcbiAgICBTZXRBY3RpdmUodHlwZTogbnVtYmVyLCBzY2FsZTogbnVtYmVyLCBzcGVlZDogbnVtYmVyLCBpc0hpdDogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XHJcbiAgICAgICAgdGhpcy5pc0hpdCA9IGlzSGl0O1xyXG4gICAgICAgIHRoaXMuaXNCb251c1Njb3JlID0gKHNjYWxlICE9IDAgJiYgdGhpcy5pc0hpdCk7XHJcbiAgICAgICAgaWYgKGlzSGl0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuYm94Q29sbGlkZXIuZW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuaW1nLnNwcml0ZUZyYW1lID0gdGhpcy5hcnJheVNwcml0ZXNbdHlwZV07XHJcblxyXG4gICAgICAgICAgICB0aGlzLnRyYWlsLnNjYWxlWCA9IDE7XHJcbiAgICAgICAgICAgIHRoaXMudHJhaWwuc2NhbGVZID0gc2NhbGU7XHJcbiAgICAgICAgICAgIHRoaXMueSA9IC0zMDYgLSAoMTAwICogc2NhbGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5ib3hDb2xsaWRlci5lbmFibGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuaW1nLnNwcml0ZUZyYW1lID0gdGhpcy5hcnJheVNwcml0ZXNIdXJ0Tm90ZXNbdHlwZV07XHJcbiAgICAgICAgICAgIC8vdGhpcy5pbWcgPSBudWxsO1xyXG4gICAgICAgICAgICB0aGlzLnRyYWlsLnNjYWxlID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jdXJyZW50U3BlZWQgPSB0aGlzLnNwZWVkSW5pdCAqIHNwZWVkO1xyXG4gICAgICAgIHRoaXMuaXNBY3RpdmUgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgcHJvdGVjdGVkIHVwZGF0ZShkdDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5ub2RlLnkgKz0gdGhpcy5jdXJyZW50U3BlZWQgKiBkdDtcclxuICAgICAgICBpZiAodGhpcy5ub2RlLnkgPCAtMzA2ICYmIHRoaXMuaXNBY3RpdmUpIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmlzSGl0KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgR2xvYmFsR2FtZVBsYXkuSW5zdGFuY2UoR2xvYmFsR2FtZVBsYXkpLmdhbWVwbGF5LkVuZW15QW5pbWF0aW9uKHRoaXMudHlwZSk7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubm9kZS55IDwgLTQxMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNBY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzQm9udXNTY29yZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIEdsb2JhbEdhbWVQbGF5Lkluc3RhbmNlKEdsb2JhbEdhbWVQbGF5KS5nYW1lcGxheS5Pbk1pc3MoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmlzQm9udXNTY29yZSAmJiAhdGhpcy5pc0FjdGl2ZSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy50cmFuc2Zvcm1Db2xsaXNpb24ueCA+IHRoaXMubm9kZS54ICsgMzAgfHwgdGhpcy50cmFuc2Zvcm1Db2xsaXNpb24ueCA8IHRoaXMubm9kZS54IC0gMzAgfHwgdGhpcy5ub2RlLnkgPCB0aGlzLnkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNCb251c1Njb3JlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vU3RvcCBzb3VuZCBndW4gYXV0b1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudGltZSArPSBkdDtcclxuICAgICAgICAgICAgICAgIC8vUGxheSBzb3VuZCBndW4gYXV0b1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudGltZSA+IDAuMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGltZSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgR2xvYmFsR2FtZVBsYXkuSW5zdGFuY2UoR2xvYmFsR2FtZVBsYXkpLmdhbWVwbGF5Lk9uQWRkU2NvcmUoMzApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgb25Db2xsaXNpb25FbnRlcihPdGhlcjogY2MuQ29sbGlkZXIsIG15U2VsZjogY2MuQ29sbGlkZXIpIHtcclxuICAgICAgICBpZiAodGhpcy5pc0FjdGl2ZSkge1xyXG4gICAgICAgICAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGlmIChPdGhlci5ub2RlLmdyb3VwID09IFwiT2JqZWN0VGFyZ2V0XCIpIHtcclxuICAgICAgICAgICAgICAgIEdsb2JhbEdhbWVQbGF5Lkluc3RhbmNlKEdsb2JhbEdhbWVQbGF5KS5nYW1lcGxheS5QbGF5ZXJBbmltYXRpb24odGhpcy50eXBlKTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm5vZGUueSA8IE90aGVyLm5vZGUueSkge1xyXG4gICAgICAgICAgICAgICAgICAgIEdsb2JhbEdhbWVQbGF5Lkluc3RhbmNlKEdsb2JhbEdhbWVQbGF5KS5nYW1lcGxheS5PbkFkZFNjb3JlKDI1MCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBHbG9iYWxHYW1lUGxheS5JbnN0YW5jZShHbG9iYWxHYW1lUGxheSkuZ2FtZXBsYXkuT25BZGRTY29yZSg1MDApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy9pZiAoIXRoaXMuaXNCb251c1Njb3JlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy90aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy99LCAwLjEpO1xyXG4gICAgICAgICAgICAgICAgLy99XHJcbiAgICAgICAgICAgICAgICAvL1BsYXkgU291bmQgR3VuIERFXHJcbiAgICAgICAgICAgICAgICAvLyBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KEdsb2JhbEdhbWVQbGF5Lkluc3RhbmNlKEdsb2JhbEdhbWVQbGF5KS5nYW1lcGxheS5zb3VuZE1hbmFnZXIuc291bmRERSwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5TcGF3bmVyRWZmZWN0T2JqZWN0KHRoaXMudHlwZSwgbXlTZWxmLm5vZGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgU3Bhd25lckVmZmVjdE9iamVjdCh0eXBlOiBudW1iZXIsIHBvczogY2MuTm9kZSkge1xyXG4gICAgICAgIHZhciBlZmYgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmVmZmVjdFByZWZbdHlwZV0pO1xyXG4gICAgICAgIGVmZi5zZXRQYXJlbnQoR2xvYmFsR2FtZVBsYXkuSW5zdGFuY2UoR2xvYmFsR2FtZVBsYXkpLmdhbWVwbGF5LmVmZmVjdFBhcmVudCk7XHJcbiAgICAgICAgZWZmLnNldFBvc2l0aW9uKHBvcy54LCBwb3MueSAtIDIwKTtcclxuICAgIH1cclxufVxyXG4iXX0=